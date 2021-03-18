import React from 'react';
import  Comment  from '../../assets/images/comment-icon.png';
import  Like  from '../../assets/images/like.png';

import './Image.css';

export default function Image({imagen}) {

    const {
        comments,
        downloads,
        favorites,         
        imageHeight, 
        imageSize, 
        imageWidth, 
        largeImageURL, 
        likes, 
        pageURL,
        previewHeight, 
        previewURL, 
        tags, 
        userImageURL, 
        views, 
        webformatURL 
    } = imagen;

    return (

        <div classname="image-container">
            
            <img src={previewURL} />

                <div className="info-extra">
                    
                    <div className="image">
                        <img src={Like} />
                    </div>
                    <div className="info">
                        {likes}
                    </div>
                    <div className="image">
                        <img src={Comment} />
                    </div>
                    <div className="info">
                        {comments}
                    </div>

                </div>

                <div className="descarga-button">
                    <a href={largeImageURL}
                        target='_blank'
                    >
                        Descargar
                    </a>
                </div>

        </div>
    )
}
