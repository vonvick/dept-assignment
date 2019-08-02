import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: #000000;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  color: #FFFFFF;
`;

type MenuItem = {
  name: string;
  path: string;
};

interface FooterMenuItems {
  items: MenuItem[]; 
};

const Footer = (props: FooterMenuItems) => {
  return (
    <StyledFooter>
      <div className="footer-menu">
        <div className="logo">
          <h3>DEPT</h3>
        </div>
        <div className="menu-items"></div>
        <div className="social-icons"></div>
      </div>
      <div className="footer-copyright">
        <div className=""></div>
        <div className="copyright-texts"></div>
        <div className="copyright-date"></div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
