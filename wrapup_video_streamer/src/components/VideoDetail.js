import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return (
            <div>
                <br></br>
                <i>Loading...</i>
            </div>
        )
    } else {
        const videoSrc = 'https://www.youtube.com/embed/' + video.id.videoId;
        return <iframe title = "youtube_video" src = {videoSrc} width="560" height="315" allowFullScreen></iframe>
    }
}

export default VideoDetail;