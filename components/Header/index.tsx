import React from 'react';
import styled from 'styled-components';

interface IProps {
  menuItems: string[],
};

const NavBar = styled.nav`
  background-color: red;
  .header-menu {
    height: 60px;
    background: yellow;
    margin: 0 auto;
    width: 90%;
  }

  .header-jumbotron {
    width: 1400px;
    height: 940px;
  }
  .jumbotron-text {
    font-family: Teko;
    line-height: 1;
    letter-spacing: normal;
  }
`;

const Header = (props: IProps) => {
  const { menuItems } = props;

  return (
    <NavBar className="header-container">
      <div className="desktop-view">
        <div className="header-menu">

        </div>
        <div className="header-jumbotron">
          <div className="jumbotron-text">
            <h3>WORK</h3>
          </div>
        </div>
      </div>
    </NavBar>
  );
};

export default Header;
