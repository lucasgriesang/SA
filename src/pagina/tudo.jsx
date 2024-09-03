import React, { useState } from 'react';

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
          
        </p>
          </div>
        );
      case 'comoFunciona':
        return (
          <div>
            <h2>Como Funciona  </h2>
            <p>Explicação de como funciona...</p>
            <p>
            contato <a href="./lixo" >Aqui!!</a>
          
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
          
        </p>
          </div>
        );
      default:
        return (
          <div>
            <h2>Cadastro lixo </h2>
            <p>Informações sobre a empresa...</p>
         
          </div>
        );
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setPagina('sobre')}>Cadastro lixo</button>
        <button onClick={() => setPagina('comoFunciona')}>Como Funciona</button>
        <button onClick={() => setPagina('contato')}>Contato</button>
     

      </nav>
      {renderizarPagina()}
    </div>
  );
};

export default tudo;
