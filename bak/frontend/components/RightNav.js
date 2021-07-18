import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  position:relative;
  right:40%;
  width:600px;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 0 15px;
    color:#fff;
    font-size:1.1rem;

  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    z-index:2;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="/">Home</a></li>
      <li><a href="/">Sports</a></li>
      <li><a href="/">Politics</a></li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </Ul>
  )
}

export default RightNav
