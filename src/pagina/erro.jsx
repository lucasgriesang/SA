import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import '../fundog.css'

function erro() {
    return (
        <div className='quem'>
            <h1>Ocorreu um erro </h1>
            <h2>Ocorreu um erro em seu site, por favor certifique-se de que as informações fornecidas estão corretas. 
Caso haja algum engano, entre em contato aqui.
 </h2>
            <p  className='erro' >
                Contato  <a href="./contato">Aqui!</a>
            </p>
            <p className='erro' >
                Voltar  <a href="./tudo">Aqui!</a>
            </p>

<img src={logo} alt="logo" style={{width: '300px',width: '25em',}} />     
          
        </div>



    );
}

export default erro;