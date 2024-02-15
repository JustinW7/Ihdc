import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import first from '../assets/img2.jpg';
import second from '../assets/img1.jpg';
import third from '../assets/img3.jpg';
import userIcon from '../assets/celeb.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import memberShip from '../assets/membership.jpg';
import { Link, Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const LandingPage = () => {
  const history = useNavigate();
  const containerStyle = {
    textAlign: 'center',
    minHeight: '100vh',
  };
 

  const leftColStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
  };

  const rightColStyle = {
    padding: '20px',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: '10px',
    color: 'black',
  };

  const navItemStyle = {
    margin: '0 10px',
    color: 'black',
    textDecoration: 'none',
  };

  const userIconStyle = {
    width: '0px',
    height: 'auto',
    marginLeft: '10px',
    cursor: 'pointer',
  };

  const premiumFeaturesStyle = {
    marginTop: '20px',
  };

  const carouselContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const carouselStyle = {
    width: '30%', 
  };

  const carouselImageStyle = {
    width: '100%',
    height: 'auto',
  };

  const buttonsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
  };

  const circularButtonStyle = {
    borderRadius: '25%',
    padding: '10px',
    backgroundColor: 'green',
    color: '#fff',
    cursor: 'pointer',
    margin: '10px',
  };

  const handleContinue = () => {
    console.log('Continue button clicked');
    // You can add your logic for handling the "Join Now" button click here
    history.push('/join');
  };

  return (
    <div className="container-fluid" style={containerStyle}>
      <div style={navStyle}>
        <a href="#" style={navItemStyle}>Home</a>
        <a href="#" style={navItemStyle}>Dashboard</a>
        <a href="#" style={navItemStyle}>Products</a>
        <a href="#" style={navItemStyle}>Transactions</a>
        <a href="#" style={navItemStyle}>Journal</a>
        
        <div style={navStyle}>
          <a href="#" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: 'auto', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faUser} />
            <h5 style={{ color: 'black', marginTop: '5px' }}>Joseph</h5>
          </a>
        </div>
      </div>

      <img src={userIcon} alt="User Icon" style={userIconStyle} />
      <div className="row">
        <div className="col-md-4" style={leftColStyle}>
          <h2>New Arrival</h2>
          <p>JOIN TODAY</p>
          <img src={memberShip}  alt="Celebrity" className="img-fluid" />


          <button
            type="button"
            className="btn btn-primary rounded-pill text-white w-100"
            style={{
              backgroundColor: 'GREEN',
              borderRadius: '50px', 

              padding: '15px', 
              marginTop: '20px', 
              border: 'BLACK',
            }}
          
          >
             <Link to="/join" style={{ color: 'WHITE', textDecoration: 'none' }}>
          Join Now
        </Link>
      </button>
           
        </div>

        <div className="col-md-8" style={rightColStyle}>
          <h3>Unlock the Premium Features Now</h3>

          <div style={{ ...premiumFeaturesStyle, ...carouselContainerStyle }}>
            <Carousel style={carouselStyle} controls={true} interval={null}>
              <Carousel.Item>
                <img className="d-block w-100" src={first} alt="First slide" style={carouselImageStyle} />
                <h3>Lower Interest Rates</h3>
              </Carousel.Item>
            </Carousel>

            <Carousel style={carouselStyle} controls={true} interval={null}>
              <Carousel.Item>
                <img className="d-block w-100" src={second} alt="Second slide" style={carouselImageStyle} />
                <h3>Interest free Payments</h3>
              </Carousel.Item>
            </Carousel>

            <Carousel style={carouselStyle} controls={true} interval={null}>
              <Carousel.Item>
                <img className="d-block w-100" src={third} alt="Third slide" style={carouselImageStyle} />
                <h3>Discount on Materials</h3>
              </Carousel.Item>
            </Carousel>
          </div>

     
          <button
            type="button"
            className="btn btn-primary rounded-pill text-white w-100"
            style={{
              backgroundColor: 'GREEN',
              borderRadius: '50px', 
              padding: '15px', 
              marginTop: '20px', 
              border: 'none',
            }}
          
          >
             <Link to="/join" style={{ color: 'white', textDecoration: 'none' }}>
          UNLOCK NOW
        </Link>
      </button>
      
      <button
            type="button"
            className="btn btn-primary rounded-pill text-white w-100"
            style={{
              backgroundColor: 'GREEN',
              borderRadius: '50px', 
              padding: '15px', 
              marginTop: '20px', 
              border: 'none',
            }}
          
          >
             <Link to="/join" style={{ color: 'white', textDecoration: 'none' }}>
          DETAILS
        </Link>
      </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
