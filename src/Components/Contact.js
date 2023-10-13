import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    return (
        <div>
          <h1>Connect with Us</h1><br/>
          <h5>Socials</h5><br/>
          <div className="d-flex justify-content-center">
            <div className="card mx-1" style={{ width: '8.7rem' , background:'black', color:'white'}}>
              <img
                src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
                className="card-img-top mx-auto d-block" 
                alt="..."
                style={{ height: '40px', width: '40px',objectFit: 'cover' , textAlign:'center'}}/>
              <div className="card-body" d-flex flex-column>
                <h5 className="card-title">LinkedIn</h5>
                <p className="card-text"> </p>
                <a href="#" className="btn btn-dark">Connect</a>
              </div>
            </div>
            <div className="card mx-1" style={{ width: '9.5rem', background:'black', color:'white'}}>
              <img
                src="/images/yt.png"
                className="card-img-top mx-auto d-block"
                alt="..."
                style={{ height: '40px', width:'40px', objectFit: 'cover' }}
              />
              <div className="card-body" d-flex flex-column>
                <h5 className="card-title">Youtube</h5>
                <p className="card-text"></p>
                <a href="#" className="btn btn-dark">Subscribe</a>
              </div>
            </div>
            <div className="card mx-1" style={{ width: '8.7rem', background:'black', color:'white'}}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjh6y-rOLbwQnCybAAyckEf5i451mYE5n1TQtOy3r8aECXGsKyqN13Ko7fZrw-patmGI8&usqp=CAUhttphttps://www.nicepng.com/png/full/178-1787413_outsystems-now-on-github-github-logo-black-background.png"
                className="card-img-top mx-auto d-block"
                alt="..."
                style={{ height: '47x', width: '47px',objectFit: 'cover' }}/>
              <div className="card-body" d-flex flex-column>
                <h5 className="card-title">GitHub</h5>
                <a href="#" className="btn btn-dark">Connect</a>
              </div>
            </div>
            <div className="card mx-3" style={{ width: '8rem' , background:'black', color:'white'}}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwACWaPG2CzQIYZeg-6HPj0gdgEQ6pChHyQg4dgArjhCx_Y8_0R_5TKn1CnezadSesy0s&usqp=CAU"
                className="card-img-top mx-auto d-block"
                alt="..."
                style={{ height: '48px', width: '48px',objectFit: 'cover' }}/>
              <div className="card-body" d-flex flex-column>
                <h5 className="card-title">Twitter</h5>
                <a href="#" className="btn btn-dark">Follow</a>
              </div>
            </div>
            <div className="card mx-1" style={{ width: '8rem', background:'black', color:'white'}}>
              <img
                src="./images/ig.jpg"
                className="card-img-top mx-auto d-block"
                alt="..."
                style={{ height: '49x', width: '49px',objectFit: 'cover' }}
              />
              <div className="card-body" d-flex flex-column>
                <h5 className="card-title">Instagram</h5>
                <a href="#" className="btn btn-dark">Follow</a>
              </div>
            </div>
          </div>
          <br/>
          <div>   
          </div>
        </div>
    );
  }
}

export default Contact;

// Add media queries for responsiveness
