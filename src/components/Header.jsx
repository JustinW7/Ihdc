import React from 'react';
import logo from '../assets/real-estate-house.png';



const Header = () => {
  const headerStyle = {
    backgroundColor: '#f0f0f0', // Grey background color
    padding: '15px', // Adjust padding as needed
    display: 'flex',
    // marginLeft: '500px',
    alignItems:'center',
    justifyContent:'center',
  };

  const logoStyle = {
    marginRight: '50px', // Adjust margin as needed
    width: '100px', // Adjust width as needed
    height: 'auto', // Maintain aspect ratio
  };

  return (
    <div style={headerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      <div>XYZ SYSTEMS LLP</div>
    </div>

    
  );
};

export default Header;
