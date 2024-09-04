import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'


function contato() {
    return (
        <div className='quem'>
            <h1>Caso queira contato </h1><br />
            <h2>telefone: 48 8849-0143</h2><br />
            <h2>email: lucas_gd_oliveira@estudante.sesisenai.org.br</h2>
            <h2>linkedin: Lucas Griesang Dieckmann de Oliveira </h2>
            
            <p>
                Voltar  <a href="./tudo">Aqui!</a>
            </p>
            <img src={logo} alt="logo" style={{width: '300px',width: '25em',}} />      
        </div>



    );
}

export default contato;
