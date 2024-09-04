import React, { useState } from 'react';
import logo from '../images/logo.png'
const tudo = () => {
  const [pagina, setPagina] = useState('sobre');

  const renderizarPagina = () => {
    switch (pagina) {
      case 'sobre':
        return (
          
          <div>
            <h2>Cadastro lixo </h2>
            <p>Cadastre o lixo aqui em baixo </p>
            <p>
              <a href="./Pagina" >Aqui!!</a>
              <p>
                    Sair da conta <a href="/">Deslogar</a>
                </p>
                
        </p>
          </div >
        );
      case 'comoFunciona':
        return (
          <div>
            <h2>Como Funciona  </h2>
            <p>Explicação de como funciona...</p>
            <p>
            contato <a href="./lixo" >Aqui!!</a>
            <p>
                    Sair da conta <a href="/">Deslogar</a>
                </p>
                
        </p>
          </div>

        );
      case 'contato':
        return (
          <div>
            <h2>Contato</h2>
            <p>Informações de contato...</p>
            <p>
            contato <a href="./contato" >Aqui!!</a>
            <p>
                    Sair da conta <a href="/">Deslogar</a>
                </p>     
        </p>
          </div>
        );
      default:
        return (
          <div>
            <h2>Cadastro lixo </h2>
            <p>Informações sobre a empresa...</p>
            <p>
                    Sair da conta <a href="/">Deslogar</a>
                </p>
                
          </div>
        );
    }
  };

  return (
    <div>
      <img src={logo} alt="logo" style={{width: '30px',width: '150px',}} /><br />
      <nav>
        <button className='but'  onClick={() => setPagina('sobre')}>Cadastro lixo</button><br />
        <button className='but'  onClick={() => setPagina('comoFunciona')}>Como Funciona</button><br />
        <button className='but'  onClick={() => setPagina('contato')}>Contato</button><br />
     


      </nav>
      {renderizarPagina()}
    </div>
  );
};

export default tudo;
