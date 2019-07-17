import React from 'react'

function PhotoCard(props) {
    return (
        <div className='photo-card'>
            <img src={props.url} alt='space'></img>
            <div className='image-text-container'>
                <h2>{props.title}</h2>
                <h4>{props.date}</h4>
                <p>{props.explanation}</p>
            </div>
        </div>
    )
}

export default PhotoCard
