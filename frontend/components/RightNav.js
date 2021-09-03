import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  position:relative;
  margin:auto;
  width:60em;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 0 15px;
    color:#fff;
    font-size:1em;
    cursor:pointer;
    font-family:Arial Bold;
    border-right: 0.5px solid #7e5e60;

  }
  li:last-child{
    border: none;
 }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #7393B3;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    z-index:9;
    height: 100vh;
    width: 100%;
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
      <li><a href="news">News</a></li>
      <li><a href="sports">Sports</a></li>
      <li><a href="politics">Politics</a></li>
      <li><a href="/">Technology</a></li>
      <li><a href="/">Entertainment</a></li>
      <li><a href="/">Lifestyle</a></li>
    </Ul>
  )
}

export default RightNav
