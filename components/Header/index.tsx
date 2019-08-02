import React from 'react';
import styled from 'styled-components';

import ButtonComponent from '../Button'
import RowContainer from '../RowContainer';
import ColumnContainer from '../ColumnContainer';

interface HeaderProps {
  backgroundImage: string;
};

const NavBar = styled.nav<HeaderProps>`
  background: url(${ props => props.backgroundImage}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  .header-menu-wrapper {
    height: 60px;
    background-color: #FFFFFF;
    @media only screen and (min-width: 900px) {
      background-color: unset;
    }
    .menu-container {
      display: flex;
      align-items: center;
      height: 60px;
      border-bottom: 1px solid #000000;
    }
    .header-logo, .header-menu {
      display: flex;
      align-items: center;
      width: 50%;
    }
    .header-logo {
      justify-content: flex-start;
      font-size: 20px;
    }
    .header-menu {
      justify-content: flex-end;
      font-size: 16px;
    }
  }
  .header-jumbotron {
    height: 100%;
    .jumbotron-container {
      letter-spacing: normal;
      line-height: 1;
      font-size: 250px;
      display: flex;
      align-items: center;
      @media only screen and (min-width: 900px) {
        font-size: 400px;
      }
    }
  }
  .view-case-wrapper {
    width: 100%;
    margin-top: 50px;
    clear: both;
    position: relative;
    top: 100px;
    @media only screen and (min-width: 900px) {
      height: 200px;
    }
    .button-item {
      width: 100%;
      @media only screen and (min-width: 900px) {
        width: 20%;
        float: right;
      }
    }
  }
`;

const Header = () => {
  const backgroundImage = '../../static/Images/florensis.png'
  return (
    <NavBar backgroundImage={backgroundImage}>
      <div className="header-menu-wrapper">
        <div className="container">
          <div className="menu-container">
            <div className="header-logo">DEPT</div>
            <div className="header-menu">MENU</div>
          </div>
        </div>
      </div>
      <div className="header-jumbotron">
        <div className="container">
          <div className="jumbotron-container">
            WORK
          </div>
        </div>
      </div>
      <div className="view-case-container">
        <div className="container">
          <div className="view-case-wrapper">
            <div className="button-item">
              <ButtonComponent
                color="white"
                background="black">
                LEARN MORE
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </NavBar>
  );
};

export default Header;
