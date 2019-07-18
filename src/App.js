import React from "react";
import "./App.css";
import PhotoGrid from "./components/PhotoGrid.js"
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 90vw;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  align-items: center;
  background-color: black;
`

function App() {
  return (
    <AppContainer>
      <PhotoGrid />
    </AppContainer>
  );
}

export default App;
