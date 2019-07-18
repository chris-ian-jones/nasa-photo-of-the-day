import React, { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard.js"
import axios from "axios"

import styled from 'styled-components'

// import { Header } from 'semantic-ui-react'
// import "semantic-ui/dist/semantic.min.css";

const Title=styled.h1`
    color: white;
    text-align: center;
`

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