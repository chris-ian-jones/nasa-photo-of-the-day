import React, { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard.js"
import axios from "axios"

function PhotoGrid() {

    const [photoData, setPhotoData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://henry-mock-nasa-api.herokuapp.com/api`)
            .then(response => {
                const responsePhotoData = response.data
                setPhotoData(responsePhotoData)
            })
    }, [])

    return (
        <div>
            <h1 style={{ 'text-align': 'left' }}> NASA Photo Of the Day </h1>
            {/* {<PhotoCard date={photoData.date} 
                key={photoData.date} 
                url={photoData.url} 
                explanation={photoData.explanation} 
                title={photoData.title}
            />} */
            photoData.map(photo => 
                <PhotoCard
                date={photo.date} 
                key={photo.date} 
                url={photo.url} 
                explanation={photo.explanation} 
                title={photo.title}
                />
                )}
        </div>
    )
}

export default PhotoGrid