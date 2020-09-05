import React from 'react';

import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => { // videos is the prop; this is destructuring
    const renderedList = videos.map( (video) => {
        return <VideoItem key = {video.id.videoId} onVideoSelect = {onVideoSelect} video = {video}/>; // gives current video we are iterating over
    });

    return <div>{renderedList}</div>
}

export default VideoList;