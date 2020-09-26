import React from 'react';

import './Footer.css';
 
const Footer = () => (
    <div className="phantom">
    <footer className="footer">
    <div className="footer-left col-md-4 col-sm-6">
      <p className="about">
        <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
        ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
      </p>
    </div>
    <div className="footer-center col-md-4 col-sm-6">
      <div>
        <i className="fa fa-map-marker"></i>
        <p><span> Street name and number</span> City, Country</p>
      </div>
      <div>
        <i className="fa fa-phone"></i>
        <p> (+91) 0000 000 000</p>
      </div>
    </div>
    <div className="footer-right col-md-4 col-sm-6">
      <h2> Company<span> logo</span></h2>
      <p className="name"> Company Name &copy; 2020</p>
    </div>
  </footer>
  </div>
  );
  



export default Footer;