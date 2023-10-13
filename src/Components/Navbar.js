import React, { Component } from 'react'
export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid mx-auto">
          <a className="navbar-brand" href="/">
            <img src="./images/logo2.png" alt="Logo" className="d-inline-block  mx-4" width="80" height="50" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="/business">About</a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="/entertainment">Events</a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="/general">Team</a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="/health">Contact</a></li>
              <br/>
            </ul>
            
          </div>
          
        </div>
        
      </nav>
      
    );
  }
}
export default Navbar;
