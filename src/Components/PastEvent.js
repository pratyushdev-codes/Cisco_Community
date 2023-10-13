import React, { Component } from 'react';
export class PastEvent extends Component {
  render() {
    return (
      <div className="text-center">
        <div><h5>Past Events</h5><br/>       
        <div className="d-flex justify-content-center">
          <div className="card mx-3" style={{ width: '27rem' , background:'black', color:'white',borderRadius:'15px',border: '1px solid grey'}}>
            <img
              src='https://www.dialogfeed.com/wp-content/uploads/2018/03/content-creation.gif'
              className="card-img-top"
              alt="..."
              style={{ height: '250px', objectFit: 'cover', borderRadius:'15px'}}/>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">AI Fusion Challenge</h5>
              <p className="card-text">
              A hackathon focused on artificial intelligence and machine learning applications across various domains. Participants can develop AI-powered solutions, from recommendation systems to computer vision applications, using cutting-edge technologies.</p>             
              <a href="#" class="btn btn-dark mt-auto mx-auto">Read more</a>
            </div>
          </div>
          <div className="card mx-3" style={{ width: '27rem' , background:'black', color:'white',borderRadius:'15px',border: '1px solid grey'}}>
            <img
              src="https://blog.imarticus.org/wp-content/uploads/2019/07/creative.gif"
              className="card-img-top"
              alt="..."
              style={{ height: '250px', objectFit: 'cover' , borderRadius:'15px'}}/>            
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Blockchain Blitz: Innovate with Distributed Ledgers</h5>
              <p className="card-text">
              A hackathon centered around blockchain technology and its applications. Participants can explore creating decentralized applications (DApps), smart contracts, or novel solutions utilizing blockchain platforms.</p>              
              <a href="#" class="btn btn-dark mt-auto mx-auto">Read more</a>
            </div>
          </div>
          <div className="card mx-3" style={{ width: '27rem' , background:'black', color:'white',borderRadius:'15px',border: '1px solid grey'}}>
            <img
              src="https://huzzed.com/wp-content/uploads/2023/02/TW_ExtendedRealities.gif"
              className="card-img-top"
              alt="..."
              style={{ height: '250px', objectFit: 'cover', borderRadius:'15px' }}/>            
            <div className="card-body d-flex flex-column">
              <h5 className="card-title"> TechXcelerate: Future Tech Symposium</h5>
              <p className="card-text">
              A symposium showcasing emerging technologies like quantum computing, augmented reality (AR), virtual reality (VR), and edge computing. This event can feature talks, hands-on demonstrations, and discussions on the future of technology.</p>            
              <a href="#" class="btn btn-dark mt-auto mx-auto">Read more</a>
            </div>
          </div>
          </div>
   </div>
   </div>   
    );
  }
}
export default PastEvent;
