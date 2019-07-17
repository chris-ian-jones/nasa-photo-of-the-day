import React, { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard.js"
import axios from "axios"

function PhotoGrid() {

    const [photos, setPhotos] = useState([]);
    const dates = ['2012-03-14', '2012-03-13', '2012-03-11']

    
    // useEffect(() => {
    //     axios
    //         .get(`https://api.nasa.gov/planetary/apod?api_key=89ntUtLrjYyw6hhSA6e7fKp31fVfzFUGHuDTkmCl&date=2012-03-14`)
            
    //         .then(response => {
    //             console.log(response.data)
    //             // const nasaData = response.data
    //         })
    
    // }, [])

    useEffect(() => {

        dates.forEach(function(date) {
            axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=89ntUtLrjYyw6hhSA6e7fKp31fVfzFUGHuDTkmCl&date=${date}`)
            .then(response => {
                photos.push(response.data)
                console.log(photos)
            })
            
        
        })
        
    }, [])
    
    // console.log(nasaData)
    return (
        <div className='photo-grid'>
            <p>Placeholder Text</p>
            <PhotoCard />
        </div>
    )
}

export default PhotoGrid