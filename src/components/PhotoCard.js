import React from 'react'

function PhotoCard(props) {
    return (
        <div style={{'display': 'flex', 'align-items': 'center', 'margin-top': '80px'}}>
            <img src={props.url} alt='space'></img>
            <div style={{'text-align': 'center'}}>
                <h2>{props.title}</h2>
                <h4>{props.date}</h4>
                <p style={{'text-align': 'left', 'margin-left': '5%'}}>{props.explanation}</p>
            </div>
        </div>
    )
}

export default PhotoCard
