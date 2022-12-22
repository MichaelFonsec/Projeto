import { Nav } from './style';
import React from 'react';

import brawlLogo from '../assets/wallpapers/brawl-stars-logo.png';

function Navbar() {
  return (
    <>
    <Nav>
        <h3><a className="link-enconder" href="">Usuario</a></h3>
        <img src={brawlLogo} width="50rem"/>
        <h3><a className="link-enconder" href="">Brawlers</a></h3>
    </Nav>
    </>
  );
}

//Vou apagar alguns arquivos desnecessarios

export default Navbar;