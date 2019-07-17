import React from 'react'

function PhotoCard(props) {
    return (
        <div className='photo-card'>
            <img src={props.url}></img>
            <div className='image-text-container'>
                <h1>{props.title}</h1>
                <h4>{props.date}</h4>
                <p>{props.explanation}</p>
            </div>
        </div>
    )
}

export default PhotoCard
