from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv
from googleapiclient.discovery import build

# 1. Load Keys
load_dotenv()
API_KEY = os.getenv("YOUTUBE_API_KEY")
CHANNEL_ID = os.getenv("CHANNEL_ID")

app = FastAPI()

# 2. CORS (Security)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 3. Setup YouTube Connection
youtube = build('youtube', 'v3', developerKey=API_KEY)

# Helper: Number Formatter (1500 -> 1.5K)
def format_number(num_str):
    if not num_str: return "0"
    num = int(num_str)
    if num >= 1_000_000:
        return f"{num / 1_000_000:.1f}M"
    elif num >= 1_000:
        return f"{num / 1_000:.0f}K"
    return str(num)

# Endpoint 1: Hero Stats
@app.get("/api/hero-stats")
def get_stats():
    try:
        request = youtube.channels().list(part="statistics", id=CHANNEL_ID)
        response = request.execute()

        if "items" in response and len(response["items"]) > 0:
            stats = response["items"][0]["statistics"]
            return {
                "subscribers": format_number(stats.get("subscriberCount", 0)) + "+",
                "views": format_number(stats.get("viewCount", 0)) + "+",
                "videos": stats.get("videoCount", 0) + "+"
            }
        return {"subscribers": "--", "views": "--", "videos": "--"}
    except Exception as e:
        print(f"Error: {e}")
        return {"subscribers": "Error", "views": "Error", "videos": "Error"}

# Endpoint 2: Latest Videos (NEW!)
@app.get("/api/videos")
def get_videos():
    try:
        # A. Get the 'Uploads' Playlist ID (Usually just swap 'C' for 'U' in Channel ID)
        uploads_id = CHANNEL_ID.replace("UC", "UU", 1)

        # B. Get the last 3 videos from that playlist
        playlist_req = youtube.playlistItems().list(
            playlistId=uploads_id,
            part="snippet",
            maxResults=3
        )
        playlist_res = playlist_req.execute()

        videos = []
        video_ids = []

        # C. Extract basic info
        for item in playlist_res.get("items", []):
            vid_id = item["snippet"]["resourceId"]["videoId"]
            video_ids.append(vid_id)
            
            videos.append({
                "id": vid_id,
                "title": item["snippet"]["title"],
                "image": item["snippet"]["thumbnails"]["high"]["url"],
                "category": "Latest", # Can't get real tags easily without more quota
                "link": f"https://www.youtube.com/watch?v={vid_id}"
            })

        # D. Fetch View Counts for these specific videos
        if video_ids:
            stats_req = youtube.videos().list(
                id=",".join(video_ids),
                part="statistics"
            )
            stats_res = stats_req.execute()
            
            # Match views to the videos
            for i, item in enumerate(stats_res.get("items", [])):
                raw_views = item["statistics"].get("viewCount", "0")
                videos[i]["views"] = format_number(raw_views) + " Views"
        
        return videos

    except Exception as e:
        print(f"Error fetching videos: {e}")
        return []