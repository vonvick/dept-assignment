import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  background: string;
  disabled?: boolean;
  color: string;
}

const ButtonComponent = styled.button<ButtonProps>`
  display: inline-block;
  background-color: ${props => props.background};
  color: ${ props => props.color};
  border: 1px solid ${props => props.background};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.75rem 1.5rem;
  width: 100%;
`;

export default ButtonComponent;
