import React, { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard.js"
import axios from "axios"

function PhotoGrid() {

    const [photoData, setPhotoData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=89ntUtLrjYyw6hhSA6e7fKp31fVfzFUGHuDTkmCl&date=2012-03-14`)
            .then(response => {
                const responsePhotoData = response.data
                setPhotoData(responsePhotoData)
            })
    }, [])

    return (
        <div>
            <h1 style={{ 'text-align': 'left' }}> NASA Photo Of the Day </h1>
            {<PhotoCard date={photoData.date} 
                key={photoData.date} 
                url={photoData.url} 
                explanation={photoData.explanation} 
                title={photoData.title}
            />}
        </div>
    )
}

export default PhotoGrid