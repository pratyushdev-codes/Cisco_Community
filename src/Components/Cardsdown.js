import React, { Component } from 'react';

class Cardsdown extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className="card mx-3 mb-3" style={{ minWidth: '18rem', maxWidth: '300px', backgroundColor: 'black', color: 'white' }}>
          <img
            src="./images/4.webp"
            className="card-img-top mx-auto d-block"
            alt="..."
            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
          />
          <div className="card-body">
            <h5 className="card-title">Guidance from Professionals</h5>
            <p className="card-text">Providing exclusive guidance from distinguished professionals from the industry.</p>
          </div>
        </div>
        <div className="card mx-3 mb-3" style={{ minWidth: '18rem', maxWidth: '300px', backgroundColor: 'black', color: 'white' }}>
          <img
            src="./images/5.webp"
            className="card-img-top mx-auto d-block"
            alt="..."
            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
          />
          <div className="card-body">
            <h5 className="card-title">Boost Knowledge Base</h5>
            <p className="card-text">Making resources accessible, which will help students to excel in this field and boost their knowledge base.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cardsdown;
