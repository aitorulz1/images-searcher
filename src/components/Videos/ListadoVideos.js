import React from 'react';
import Video from './Video';

export default function ListadoVideos({videos}) {
    return (
        <div>
            <div className="individual-card-image">
                {videos.map(video => (
                    <Video
                        key={video.id}
                        video={video}
                    />
                ))}
            </div>
        </div>
    )
}
