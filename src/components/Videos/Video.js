import React from 'react';
import  Comment  from '../../assets/images/comment-icon.png';
import  Like  from '../../assets/images/like.png';

import './Video.css';

export default function Video({video}) {
   
    const {
        comments,
        likes,
        userImageURL,
        videos
    } = video;

    return (
        <div className="video-delimitador">
            <div className="video-container">
                <iframe allow="autoplay" src={videos.small.url}></iframe>
            </div>
        </div>
    )
}
