import React from 'react';
import styled from 'styled-components';

const ButtonItem = styled.button`
  display: inline-block;
  background-color: ${props => props.background};
  color: ${ props => props.color};
  border: 1px solid ${props => props.background};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.75rem 1.5rem;
`;

const ButtonComponent = props => {
  const { children, background, disabled, color } = props;
  return (
    <ButtonItem
      disabled={disabled}
      color={color}
      background={background}>
      {children}
    </ButtonItem>
  );
};

export default ButtonComponent;
