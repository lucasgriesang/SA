import React, { useState } from 'react';
import logo from '../images/logo.png'
import '../tudo.css'

const tudo = () => {
  const [pagina, setPagina] = useState('sobre');
  const [cep, setCep] = useState('');
    const [tipoLixo, setTipoLixo] = useState('');
    const [dataMes, setDataMes] = useState('');

    const handleCepChange = (e) => setCep(e.target.value);
    const handleTipoLixoChange = (e) => setTipoLixo(e.target.value);
    const handleDataMesChange = (e) => setDataMes(e.target.value);
  const renderizarPagina = () => {
    switch (pagina) {
      case 'sobre':
        return (
          <div>
            <div className="auth-container2">
                <h1>Cadastro Lixo</h1>
                <div className="container">
                    <div className="input-group">
                        <label htmlFor="cep">CEP:</label>
                        <input
                            type="text"
                            id="cep"
                            value={cep}
                            onChange={handleCepChange}
                            placeholder="Digite o CEP"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="tipo-lixo">Tipo de Lixo:</label>
                        <input
                            type="text"
                            id="tipo-lixo"
                            value={tipoLixo}
                            onChange={handleTipoLixoChange}
                            placeholder="Digite o tipo de lixo"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="data-mes">Data/Mês:</label>
                        <input
                            type="text"
                            id="data-mes"
                            value={dataMes}
                            onChange={handleDataMesChange}
                            placeholder="Digite a data/mês"
                        />
                    </div>
                    <button className='but'>Confirma</button>
                    <img src={logo} alt="logo" style={{ width: '200px' }} />
                    <p>
                        Confirma <a href="./gg">Aqui!</a>
                    </p>
                    <p>
                        Confirma (com erro) <a href="./erro">Aqui!</a>
                    </p>
                  
                    <p>
                        Sair da conta <a href="/">Deslogar</a>
                    </p>
                </div>
            </div>
        </div>
        );
        
      case 'comoFunciona':
        return (
          <div>
            <div className="auth-container2">
              <h1>Como Funciona  </h1>
              <div className='contato'>
        
            
        
              <img src={logo} alt="logo" style={{width: '300px',width: '25em', border: '300px',}} />     
            <h1>Quem Somos:</h1><br />
            <h2>A “nome da empresa” é uma empresa com o objetivo de descartar corretamente resíduos eletrônicos.</h2><br />
            <h1>Nossos Serviços:</h1><br />
            <h2>Através do nosso aplicativo, usuários registram o tipo de lixo a ser descartado e o CEP, e os resíduos são descartados.</h2><br />
            <h1>Que tipo de resíduos são descartados:</h1><br />
            <h2>Desde equipamentos de escritório até eletrodomésticos e dispositivos pessoais.</h2><br />
        </div>
            </div>
          </div>

        );
      case 'contato':
        return (
          <div>
            <div className="auth-container2">
              
              <div className='quem'>
            <h1 className='contatoh1'>Caso queira contato </h1><br />
            <h2>Telefone: 48 9999-9999</h2><br />
            <h2>Email: carlos@gmail.com</h2>
            <h2>Linkedin: linkedin100%real </h2>
            <img src={logo} alt="logo" style={{width: '300px',width: '25em',}} />      
        </div>
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
    <h3 className='tamanho'></h3>
      <nav>
        <button className='butcase' onClick={() => setPagina('sobre')}>Cadastro lixo</button>
        <button className='butcase' onClick={() => setPagina('comoFunciona')}>Como Funciona</button>
        <button className='butcase' onClick={() => setPagina('contato')}>Contato</button><br />
      </nav>
      {renderizarPagina()}
     
          </div>

);
};

export default tudo;
