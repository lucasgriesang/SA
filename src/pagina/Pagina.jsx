import React, { useState } from 'react';
import logo from '../images/logo.png'
 

function Pagina() {
    const [cep, setCep] = useState('');
    const [tipoLixo, setTipoLixo] = useState('');
    const [dataMes, setDataMes] = useState('');

    const handleCepChange = (e) => setCep(e.target.value);
    const handleTipoLixoChange = (e) => setTipoLixo(e.target.value);
    const handleDataMesChange = (e) => setDataMes(e.target.value);

    return (
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
                <img src={logo} alt="logo" style={{width: '300px',width: '200px',}} />    
                <p>

                Confirma   <a href="./gg">Aqui!</a>

                </p>
                <p>
                Confirma(com erro )   <a href="./erro">Aqui!</a>

                </p>
                <p>
                    Voltar  <a href="./tudo">Aqui!</a>
                </p>
                <p>
                    Sair da conta <a href="/">Deslogar</a>
                </p>
                
            </div>
        </div>

    );
}

export default Pagina;
