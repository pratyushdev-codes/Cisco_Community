import React, { Component } from 'react';
export class Gif extends Component {
  render() {
    return (     
      <div style={{ position: 'relative' }}>
        <style>
          {`
            .brain-image {
              max-width: 95%;
              border-radius: 20px;
            }
            .image-text {
              position: absolute;
              top: 15%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: orchid;
              font-size: 20px;
              {/* font-weight: bold; */}
              text-shadow: 2px 2px #000;
            }
            .image-text-text {
              position: absolute;
              top: -45%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: white;
              font-size: 30px;
              {/* font-weight: bold; */}
              text-shadow: 2px 2px #000;
            }
             .why{
                text-shadow: 2px 2px #000;
             }
             .down-text{
                position:absolute;
                top:500px;
                left:28%;                  
             }
          `}
        </style>
        <img src="./images/brain.gif" className="brain-image" alt="brain" />
        <br/>
        <div className="image-text"><div className='image-text-text'><h2>About us</h2></div>
        We Are An Officially Recognized Community For Cisco From VIT Bhopal University</div>
        <div className='down-text'><h5>4 Guides | 25+ Team Strength | 2 Events Organized | Blogs- Coming soon </h5></div> <br/><br/>    
        <div className='why'><h1>Why Cisco Community?</h1></div><br/><br/>    
      </div>
    );
  }
}
export default Gif;