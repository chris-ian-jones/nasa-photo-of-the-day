import React from 'react'
import { Header } from 'semantic-ui-react'
import styled from 'styled-components'

// use of styled-components
const FlexedCenterDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 80px;
    padding: 30px;
    background-color: darkgrey;
`

// use of styled-components
const TextAlignCenterDiv = styled.div`
    text-align: center;
`

// use of styled-components
const PAlignLeftMarginLeft = styled.p`
    text-align: left; 
    margin-left: 5%;
    margin-right: 5%;
`

// use of styled-components
const SizedImage = styled.img`
    width: 900px;
    height: auto;
`

// photocard component receiving props passed down from PhotoGrid.js to display within elements
function PhotoCard(props) {
    return (
        <FlexedCenterDiv>
            <SizedImage src={props.url} alt='space'></SizedImage>
            <TextAlignCenterDiv>
                {/* use of sematic-ui-react */}
                <Header as='h2'>{props.title}</Header>
                <Header as='h4'>{props.date}</Header>
                <PAlignLeftMarginLeft>{props.explanation}</PAlignLeftMarginLeft>
            </TextAlignCenterDiv>
        </FlexedCenterDiv>
    )
}

export default PhotoCard