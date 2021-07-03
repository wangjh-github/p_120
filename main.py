# !/usr/bin/python
# -*- coding: utf-8 -*-
# @time    : 2020/07/10 20:27
# @author  : LanBingWa
# @function: get service of fastapi

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn

import praw
from praw.models import InlineImage, InlineVideo
import entry
import send_message
app = FastAPI()

origins = [
    "http://localhost",
    "http://127.0.0.1:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Item(BaseModel):
    image_name: str
    title: str
    community: str

class VideoItem(BaseModel):
    video_name: str

class TextItem(BaseModel):
    fabutxts: list
    siliaotxts: list

#uvicorn main:app --reload
@app.post('/image_joint')
def publish_joint(item: Item):
    print('starting')
    reddit = praw.Reddit(client_id='JSGZBXmQnOJRLg',client_secret='r4tNHp91-LoJoNhJbtnjRbZB2F_z4g',user_agent='testscript by u/fakebot3',username = 'andrelike',password = '19970613')
    reddit.validate_on_submit=True
    print(reddit.user.me())
    title = item.title
    image = "D:/server/image/"+str(item.image_name)
    community = item.community

    print(title)
    print(image)
    print(community)
    my_post = reddit.subreddit(community).submit_image(title, image)
    return "success"

@app.post('/video_joint')
def publish_video(videoItem: VideoItem):
    video = ["D:/server/video/"+str(videoItem.video_name)]
    print('starting')
    entry.upload(video)
    return "success"

@app.post('/text_joint')
def publish_text(TextItem: TextItem):
    
    print('starting')
    send_message.tweet(TextItem.fabutxts)
    send_message.send_message(TextItem.siliaotxts)
    return "success"

if __name__ == '__main__':
    uvicorn.run(app=app,
                host="localhost",
                port=8000,
                workers=1)
