import React, { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard.js"
import axios from "axios"
import styled from 'styled-components'

// use of styled-components
const Title=styled.h1`
    color: white;
    text-align: center;
`

function PhotoGrid() {
    // destructuring assignment for array
    const [photoData, setPhotoData] = useState([]);

    // single api call to Henry's service for object of nasa images with data
    // updating state of variable photoData
    useEffect(() => {
        axios
            .get(`https://henry-mock-nasa-api.herokuapp.com/api`)
            .then(response => {
                const responsePhotoData = response.data
                setPhotoData(responsePhotoData)
            })
    }, [])

    return (
        // return grid component of photocard components
        <div>
            <Title>NASA Photo Of the Day</Title>
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