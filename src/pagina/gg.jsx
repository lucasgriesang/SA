import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png'

function gg() {
    return (
        <div className='quem'>
            <h1>Lixo entregue com sucesso  </h1><br />
            <h2>Muito obrigado </h2><br />
            <img src={logo} alt="logo" style={{width: '300px',width: '25em',}} />     
            <p>
                Voltar  <a href="./tudo">Aqui!</a>
            </p>
        </div>



    );
}

export default gg;
