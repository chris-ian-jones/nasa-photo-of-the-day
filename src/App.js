import React from "react";
import "./App.css";
import PhotoGrid from "./components/PhotoGrid.js"
import styled from 'styled-components'
import { Grid, Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import SimpleMenu from "./components/Menu";
// import 'semantic-ui-css/semantic.min.css'

// using styled-components
const AppContainer = styled.div`
  width: 90vw;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  align-items: center;
  background-color: black;
  padding-bottom: 80px;
`

const MenuDiv = styled.div`
  width: 100vw;
`

// app component
function App() {
  return (
    <MenuDiv>
      <SimpleMenu />
      <AppContainer>
        <PhotoGrid />
      </AppContainer>
    </MenuDiv>
  );
}

export default App;
