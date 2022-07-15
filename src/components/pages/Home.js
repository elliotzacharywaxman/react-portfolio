import React from 'react';

const home = {
  header: {
    fontSize: '72px',
    color: "purple"
  },
  images: {
    width: '280px',
    marginTop: '5px',
    marginLeft: "auto",
    marginRight: "auto",
    class: "card-img-top"
  },
  notThicc: {
    width: "300px",
  },
  display: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"

  }
}

export default function Home() {
  return (
    <div>
      <h1 style={home.header}>Home Page</h1>
      <div style={home.display}>
        <div className="card" style={home.notThicc}>
          <img src="https://images.wagwalkingweb.com/media/care/can-dogs-get-glasses/can-dogs-get-glasses.jpg" style={home.images} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Carbon Calculator</h5>
            <p className="card-text">Click below to calculate your carbon footprint and offset your emissions.</p>
            <a href="#contact" className="btn btn-primary">Check It Out</a>
          </div>
        </div>
        <div className="card" style={home.notThicc}>
          <img src="https://images.wagwalkingweb.com/media/care/can-dogs-get-glasses/can-dogs-get-glasses.jpg" style={home.images} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Carbon Calculator</h5>
            <p className="card-text">Click below to calculate your carbon footprint and offset your emissions.</p>
            <a href="#contact" className="btn btn-primary">Check It Out</a>
          </div>
        </div>
        <div className="card" style={home.notThicc}>
          <img src="https://images.wagwalkingweb.com/media/care/can-dogs-get-glasses/can-dogs-get-glasses.jpg" style={home.images} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Carbon Calculator</h5>
            <p className="card-text">Click below to calculate your carbon footprint and offset your emissions.</p>
            <a href="#contact" className="btn btn-primary">Check It Out</a>
          </div>
        </div>
      </div>
      <div style={home.display}>
        <div className="card" style={home.notThicc}>
          <img src="https://images.wagwalkingweb.com/media/care/can-dogs-get-glasses/can-dogs-get-glasses.jpg" style={home.images} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Carbon Calculator</h5>
            <p className="card-text">Click below to calculate your carbon footprint and offset your emissions.</p>
            <a href="#contact" className="btn btn-primary">Check It Out</a>
          </div>
        </div>
        <div className="card" style={home.notThicc}>
          <img src="https://images.wagwalkingweb.com/media/care/can-dogs-get-glasses/can-dogs-get-glasses.jpg" style={home.images} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Carbon Calculator</h5>
            <p className="card-text">Click below to calculate your carbon footprint and offset your emissions.</p>
            <a href="#contact" className="btn btn-primary">Check It Out</a>
          </div>
        </div>
        <div className="card" style={home.notThicc}>
          <img src="https://images.wagwalkingweb.com/media/care/can-dogs-get-glasses/can-dogs-get-glasses.jpg" style={home.images} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Carbon Calculator</h5>
            <p className="card-text">Click below to calculate your carbon footprint and offset your emissions.</p>
            <a href="#contact" className="btn btn-primary">Check It Out</a>
          </div>
        </div>
      </div>
    </div>
  );
}
