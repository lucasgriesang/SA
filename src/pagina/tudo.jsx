import React, { useState } from 'react';
import logo from '../images/logo.png'
import '../tudo.css'

const tudo = () => {
  const [pagina, setPagina] = useState('sobre');

  const renderizarPagina = () => {
    switch (pagina) {
      case 'sobre':
        return (
          <div>
               <div className="auth-container2">
            <h2>Cadastro lixo </h2>
            <p>
              <a href="./Pagina" >Aqui!!</a>
              
            </p>
            </div>
          </div >
        );
        
      case 'comoFunciona':
        return (
          <div>
            <div className="auth-container2">
              <h2>Como Funciona  </h2>
              <p>
                contato <a href="./lixo" >Aqui!!</a>
               
              </p>
            </div>
          </div>

        );
      case 'contato':
        return (
          <div>
            <div className="auth-container2">
              <h2>Contato</h2>
              <p>
                contato <a href="./contato" >Aqui!!</a>
              
              </p>
            </div>
          </div>
        );
      default:
        return (
          <div>

          </div>
        );
    }
  };

  return (
    <div className='tudo' >
      <nav>
        <button className='butcase' onClick={() => setPagina('sobre')}>Cadastro lixo</button>
        <button className='butcase' onClick={() => setPagina('comoFunciona')}>Como Funciona</button>
        <button className='butcase' onClick={() => setPagina('contato')}>Contato</button><br />



      </nav>
      {renderizarPagina()}
     
      <p>
              Sair da conta <a href="/">Deslogar</a>
            </p>
    </div>

);
};

export default tudo;