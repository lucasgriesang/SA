import React, { useState } from 'react';

const App = () => {
  const [pagina, setPagina] = useState('sobre');

  const renderizarPagina = () => {
    switch (pagina) {
      case 'sobre':
        return (
          <div>
            <h2>Sobre a Empresa</h2>
            <p>Informações sobre a empresa...</p>
          </div>

        );
      case 'comoFunciona':
        return (
          <div>
            <h2>Como Funciona</h2>
            <p>Explicação de como funciona...</p>
          </div>

        );
      case 'contato':
        return (
          <div>
            <h2>Contato</h2>
            <p>Informações de contato...</p>
          </div>
        );
      default:
        return (
          <div>
            <h2>Sobre a Empresa</h2>
            <p>Informações sobre a empresa...</p>
 
 
          </div>
  
  );
  
    }
  };

  
  return (
    <div>
      <nav>
        <button onClick={() => setPagina('sobre')}>Sobre a Empresa</button>
        <button onClick={() => setPagina('comoFunciona')}>Como Funciona</button>
        <button onClick={() => setPagina('contato')}>Contato</button>
      </nav>
      {renderizarPagina()}
    </div>
  );
};


export default App;
