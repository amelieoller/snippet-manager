import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.div`
  label {
    font-size: 1.2rem;
    font-weight: 300;
    color: ${({ theme }) => theme.grey};
    text-transform: uppercase;
  }

  textarea {
    height: 8rem;
    resize: none;
  }

  input,
  textarea {
    font-size: ${props => (props.small ? '1.3rem' : '1.5rem')};
    font-weight: 300;
    width: 100%;
    padding: ${props => (props.small ? '0.6rem 0.9rem' : '1rem 1.2rem')};
    color: ${({ theme }) => theme.textDark};
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.darkerGrey};
    }
  }

  input:focus,
  textarea:focus {
    border-color: ${({ theme }) => theme.primary}87;
    box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075) inset,
      0 0 8px ${({ theme }) => theme.primary}87;
    outline: 0 none;
  }
`;

const Input = ({ className, small, ...props }) => (
  <StyledInput textarea={props.type} className={className} small={small}>
    {props.title && <label htmlFor={props.name}>{props.title}</label>}
    {props.type === 'textarea' ? (
      <textarea id={props.name} {...props} />
    ) : (
      <input id={props.name} {...props} />
    )}
  </StyledInput>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string
};

Input.defaultProps = {
  required: false,
  type: 'text'
};

export default Input;
