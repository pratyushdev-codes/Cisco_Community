import React, { Component } from 'react'
export class Header extends Component {
  render() {
    return (
      <div>
         <style>
          {`
            .banner-image {
              max-width: 97%;
              border-radius: 20px;
            }

            .text-welcome{
              color:white;
              font-size: 30px;
              font-weight:bold;
            }
            .text-community{
              color:orchid;
             
              
            }
          `}
        </style>
        <img src="./images/yyyy.jpg" className="banner-image" alt="Banner" />

        <br/>
        <br/>  
        <br/>
      
        <div div className='text-welcome'><h5>Welcome to the Community!<br/></h5></div>
      
        
        
        
        <div className='text-community'>The Community is a hub for connecting with your peers and Cisco specialists to ask for help, share your expertise, build your network, and grow professionally.</div>
        <br/>
        <br/>
       
       
      </div>
    )
  }
}

export default Header
