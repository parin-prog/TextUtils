import React from 'react'
import './About.css'

export default function About(props) {
  const myStyle = {
    color: props.darkmode === 'dark' ? 'white' : 'gray',
    backgroundColor: props.darkmode === 'dark' ? 'gray' : 'white',
    border: '2px solid',
    borderColor: props.darkmode === 'dark' ? 'white' : 'gray'
  }

  var acc = document.getElementsByClassName("accordion");
  var i;
 
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  return (
    <div style={myStyle}>
    <h2>Accordion</h2>
    <button className="accordion">Section 1</button>
    <div className="panel">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <button className="accordion">Section 2</button>
    <div className="panel">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <button className="accordion">Section 3</button>
    <div className="panel">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    </div>
  )
}
