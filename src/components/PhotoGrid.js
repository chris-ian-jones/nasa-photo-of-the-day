import React, { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard.js"
import axios from "axios"

function PhotoGrid() {

    const [photoData, setPhotoData] = useState([]);
    // const dates = ['2012-03-14', '2012-03-13', '2012-03-11']
    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=89ntUtLrjYyw6hhSA6e7fKp31fVfzFUGHuDTkmCl&date=2012-03-14`)
            .then(response => {
                const photoData = response.data
                setPhotoData(photoData)
            })
    }, [])

    // useEffect(() => {
    //     dates.forEach(function(date) {
    //         axios
    //         .get(`https://api.nasa.gov/planetary/apod?api_key=89ntUtLrjYyw6hhSA6e7fKp31fVfzFUGHuDTkmCl&date=${date}`)
    //         .then(response => {
    //             // photos.push(response.data)
    //             // console.log(photos)
    //             setPhotos(photos.push(Object.values(response)))
    //             // console.log(Object.values(photos))
    //             console.log(photos)
    //         })  
    //     })
    // }, [])
    
    console.log(photoData)
    return (
        <div className='photo-grid'>
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