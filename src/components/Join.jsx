import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from '../assets/celeb.png';

const TwoColumnLayout = () => {
  const handleContinue = () => {
    // Handle continue button click event, e.g., send OTP request
    // You can add your logic for sending OTP here
    console.log('Continue button clicked');
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Column */}
        <div className="col-md-4">
          <h2>Unlock Exclusive Benefits</h2>
          <form>
            {/* Country Code Dropdown */}
            <div className="form-group">
              <label htmlFor="countryCode">Country Code</label>
              <select
                className="form-control rounded"
                id="countryCode"
              >
                {/* Add options for country codes as needed */}
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                {/* Add more options as needed */}
              </select>
            </div>

            {/* Phone Number Input */}
            <div className="form-group mb-3">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                className="form-control rounded"
                id="phoneNumber"
                placeholder="1234567890"
              />
            </div>

            {/* Name Input */}
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control rounded"
                id="name"
                placeholder="Your Name"
              />
            </div>

            {/* Email Input */}
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control rounded"
                id="email"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Continue Button */}
            <button
  type="button"
  className="btn btn-primary rounded-pill text-white w-100"
  style={{
    backgroundColor: 'blue',
    borderRadius: '50px', // Circular border-radius
    padding: '15px', // Adjust padding as needed
    marginTop: '20px', // Add margin as needed
  }}
  onClick={handleContinue}
>
  Join Now
</button>


            {/* Information */}
            <p className="mt-3">Get ready to receive a secret code (OTP) on your phone.</p>
          </form>
        </div>

        {/* Right Column */}
        <div className="col-md-8">
          <img src={myImage} alt="Celebrity" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
