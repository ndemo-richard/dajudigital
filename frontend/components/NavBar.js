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
  .logo {
    padding: 15px 0;
    color:#fff;
    margin-left:10rem;
    width:2em;
    height:2em;
  }
  @media (max-width:768px){
   .logo{
   margin:0;
   }
   }
`

const Navbar = () => {
  return (
    <Nav>
      
      <div className={styles.logo}>
        <Image
	  src="/images/logo.jpg"
	  alt="logo"
          layout="fill"
	  />
      </div>
      <div className={styles.hook}></div>
      <Burger />
    </Nav>
  )
}

export default Navbar
