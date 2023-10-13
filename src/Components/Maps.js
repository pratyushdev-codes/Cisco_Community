import React, { Component } from 'react'

export class Maps extends Component {
  render() {
    return (
      <div>
        <h5>Find us at</h5><br/>  
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5358699645044!2d76.84871217499258!3d23.077471479135376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9ceaaaaaaab%3A0xa224b6b82b421f83!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Bhopal!5e0!3m2!1sen!2sin!4v1682964238237!5m2!1sen!2sin&zoom=-10" 
        
          width="695" 
          height="300" 
          style={{ border: 0, borderRadius: '10px' }} 
          allowFullScreen="" 
                    referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        <br/>
        <br/>
        Cisco Community  | VIT Bhopal
        <br/>
        <br/>
      </div>
     
    )
  }
}

export default Maps
