import React from "react";
import "./App.css";
import PhotoGrid from "./components/PhotoGrid.js"

function App() {
  return (
    <div style={{
      'width': '90%',
      'margin-left': '5%',
      'margin-right': '5%',
      'display': 'flex',
      'align-items': 'center'
    }}>
      <PhotoGrid />
    </div>
  );
}

export default App;
