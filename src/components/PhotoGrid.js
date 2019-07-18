import React, { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard.js"
import axios from "axios"

import { Header } from 'semantic-ui-react'
// import "semantic-ui/dist/semantic.min.css";

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
            {/* Example of using semantic-ui-react */}
            <Header as='h1'>NASA Photo Of the Day</Header>
            {photoData.map(photo => 
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