import React, { Component } from 'react';

class Cards extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className="card mx-3" style={{ width: '100%', maxWidth: '18rem', backgroundColor: 'black', color: 'white' }}>
          <img
            src="./images/1.webp"
            className="card-img-top mx-auto d-block"
            alt="..."
            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
          />
          <div className="card-body">
            <h5 className="card-title">Career Building</h5>
            <p className="card-text">
              Focusing on career building and upscaling skills of the students and giving their resume a boost.
            </p>
          </div>
        </div>
        <div className="card mx-3" style={{ width: '100%', maxWidth: '18rem', backgroundColor: 'black', color: 'white' }}>
          <img
            src="./images/2.webp"
            className="card-img-top mx-auto d-block"
            alt="..."
            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
          />
          <div className="card-body">
            <h5 className="card-title">Boosting Problem Solving Skills</h5>
            <p className="card-text">
              Boosting problem solving skills through competitions, contests, hackathons any other fun events.
            </p>
          </div>
        </div>
        <div className="card mx-3" style={{ width: '100%', maxWidth: '18rem', backgroundColor: 'black', color: 'white' }}>
          <img
            src="./images/3.webp"
            className="card-img-top mx-auto d-block"
            alt="..."
            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
          />
          <div className="card-body">
            <h5 className="card-title">Education and Learning</h5>
            <p className="card-text">Educating everyone about Cisco Community and how it can give a boost to their career.</p>
          </div>
        </div>

        <style>
          {`
            @media (min-width: 576px) {
              .card {
                width: calc(50% - 2rem);
                max-width: none;
              }
            }

            @media (min-width: 768px) {
              .card {
                width: calc(33.33% - 2rem);
                max-width: none;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default Cards;
