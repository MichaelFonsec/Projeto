import { BoxBrawl } from './style';
import React from 'react';

function ConteudoUsuario() {
  return (
    <BoxBrawl>
      <div id="box">
        Pesquise seu id de Usuario
        <input type="text" placeholder='#XXXXXXXX' />
        <button>Procurar</button>
      </div>
    </BoxBrawl>
  );
}

export default ConteudoUsuario;