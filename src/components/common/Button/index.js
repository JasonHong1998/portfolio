import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  color: #fff;
  background-color: #000;
  border: none;
  outline: none;
  position: relative;
  z-index: 1;
  transition: color 300ms ease-in-out;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #00b0ff;
    z-index: -1;
    border-radius: 3px;

    transition: transform 300ms ease-in-out;
    transform: scaleX(0);
    transform-origin: left;
  }

  &:hover:before,
  &:hover:focus {
    transform: scaleX(1);
  }

  &:hover,
  &:focus {
    color: #000;
  }

  &:disabled {
    background: gray;
  }
`;
