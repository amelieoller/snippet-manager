import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 1.4rem;
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
  color: ${props => (props.full ? 'white' : props.theme.primary)};
  cursor: pointer;
  display: flex;
  align-items: center;
  background: ${props =>
    props.full ? props.theme.primary : props.theme.transparentWhite};
  border: ${props => (props.full ? 'none' : `1px solid ${props.theme.primary}`)};

  &.selected {
    background: ${({ theme }) => theme.primary};
    color: white;
  }

  &:hover {
    background: ${props => (props.full ? props.theme.primaryLight : props.theme.primary)};
    color: white;
  }
`;

const Button = ({ full, children, ...props }) => (
  <StyledButton full={full} {...props}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
