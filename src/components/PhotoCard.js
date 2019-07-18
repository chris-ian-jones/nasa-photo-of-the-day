import React from 'react'

import { Header } from 'semantic-ui-react'
// import "semantic-ui/dist/semantic.min.css";
import styled from 'styled-components'

const FlexedCenterDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 80px;
    padding: 30px;
    background-color: darkgrey;
`

const TextAlignCenterDiv = styled.div`
    text-align: center;
`

const PAlignLeftMarginLeft = styled.p`
    text-align: left; 
    margin-left: 5%;
    margin-right: 5%;
`

const SizedImage = styled.img`
    width: 900px;
    height: auto;
`

function PhotoCard(props) {
    return (
        <FlexedCenterDiv>
            <SizedImage src={props.url} alt='space'></SizedImage>
            <TextAlignCenterDiv>
                <Header as='h2'>{props.title}</Header>
                <Header as='h4'>{props.date}</Header>
                <PAlignLeftMarginLeft>{props.explanation}</PAlignLeftMarginLeft>
            </TextAlignCenterDiv>
        </FlexedCenterDiv>
    )
}

export default PhotoCard
