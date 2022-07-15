import React from 'react';
import pic from '../pages/SitePic.png'
const text = {
  width: "800px",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "75px"
}

const bg = {
  backgroundColor: "yellow"
}

const photo = {
  width: "600px",
  marginLeft: "400px",
  marginRight: "auto",
  marginBottom: "20px"
}

export default function About() {
  return (
    <div style={bg}>
      <h1>About Me</h1>
      <img src={pic} style={photo} alt="..." />
      <p style={text}>
        Hi, I'm Elliot. I'm the founder ClimateDAO a community (launching in Summer 22'). Before co-founding ClimateDAO, I was a researcher at KPMG's Innovation Lab where I focused on decarbonization, corporate governance, and blockchain.
      </p>
    </div>
  );
}
