import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Burger from './Burger';
import styles from '../styles/NavBar.module.scss';
const Nav = styled.nav`
  width: 100%;
  height: 2.5em;
  position:static;
  background-color:#212121;
  padding:0 20px;
  display: flex;
  justify-content: space-between;
 
  @media (max-width:767px){
  height:2em;
   }
`

const Navbar = () => {
  return (
    <Nav>
      
      
      
      <Burger />
    </Nav>
  )
}

export default Navbar
