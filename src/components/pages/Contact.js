import React from 'react';

const contactStyle = {
  width: "600px",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "300px"
}
const bg = {
  backgroundColor: "lime"
}
export default function Contact() {
  return (
    <div style={bg}>
      <h1>Contact Page</h1>
      <div style={contactStyle}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="button" class="btn btn-primary">Submit</button>
      </div>
    </div>
  );
}
