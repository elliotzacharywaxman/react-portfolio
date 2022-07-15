import React from 'react';


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          style={currentPage === 'Home' ? glow5 : {}}

        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          style={currentPage === 'About' ? glow4 : {}}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
          style={currentPage === 'Blog' ? glow3 : {}}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          style={currentPage === 'Contact' ? glow2 : {}}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          style={currentPage === 'Resume' ? glow : {}}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

const glow = {
  backgroundColor: "yellow",
  boxShadow: "0px 20px 20px #0AA"
}
const glow2 = {
  backgroundColor: "blue",
  color: "white",
  boxShadow: "0px 20px 20px #1BB"
}
const glow3 = {
  backgroundColor: "green",
  color: "white",
  boxShadow: "0px 20px 20px #2CC"
}
const glow4 = {
  backgroundColor: "orange",
  boxShadow: "0px 20px 20px #3DD"
}
const glow5 = {
  backgroundColor: "purple",
  color: "white",
  boxShadow: "0px 20px 20px #7EE"
}
export default NavTabs;
