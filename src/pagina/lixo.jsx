import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import '../fundog.css'
function Lixo() {
    return (
        
        <div className='contato'>
        
            
        
              <img src={logo} alt="logo" style={{width: '300px',width: '25em', border: '300px',}} />     
            <h1>Quem Somos:</h1><br />
            <h2>A “nome da empresa” é uma empresa com o objetivo de descartar corretamente resíduos eletrônicos.</h2><br />
            <h1>Nossos Serviços:</h1><br />
            <h2>Através do nosso aplicativo, usuários registram o tipo de lixo a ser descartado e o CEP, e os resíduos são descartados.</h2><br />
            <h1>Que tipo de resíduos são descartados:</h1><br />
            <h2>Desde equipamentos de escritório até eletrodomésticos e dispositivos pessoais.</h2><br />
            <p className='sair'>
                Voltar  <a href="./tudo">Aqui!</a>
            </p>
          

        </div>





    );
}

export default Lixo;
