import React, { Component } from 'react'

export class Cisco extends Component {
  render() {
    return (
      <div>
        <style>
          {`
            .data-image {
              max-width: 80%;
              border-radius: 50px;
              height:auto;
            }
            .btn-dark {
              color: white;
              border-radius: 35px;
              width: 80%;
            }
            
            /* Responsive styles */
            @media (max-width: 768px) {
              .data-image {
                max-width: 100%;
              }
              .btn-dark {
                width: 100%;
              }
            }
          `}
        </style>
        <h1>Importance of Cisco Community</h1><br/>
        Skill Development and Training | Access to Resources | Networking Opportunities | Industry Insights | Events and Workshops | Research and Innovation<br/><br/>
        <img src="./images/banner2.jpg" className="data-image" alt="Banner" /><br/><br/>
       
        <button type="button" className="btn btn-dark" data-mdb-ripple-color="dark">Cisco Community is an active and collaborative place to learn more about our products and ask questions of peers and Cisco experts!<br/> It is a crucial discipline that impacts almost every aspect of our lives, from business to healthcare and entertainment.</button>
      </div>
    )
  }
}

export default Cisco 
