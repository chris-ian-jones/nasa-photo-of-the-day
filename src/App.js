import React from "react";
import "./App.css";
import PhotoGrid from "./components/PhotoGrid.js"
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  align-items: center;
`

function App() {
  return (
    <AppContainer>
      <PhotoGrid />
    </AppContainer>
  );
}

export default App;
