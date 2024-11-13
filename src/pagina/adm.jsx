import React, { useState } from 'react';

const Adm = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [tipoLixo, setTipoLixo] = useState('reciclavel');
    const [data, setData] = useState('');
    const [usuarios, setUsuarios] = useState([]); // Estado para armazenar usuários
    const [registrosLixo, setRegistrosLixo] = useState([]); // Estado para armazenar registros de lixo
    const [mostrarUsuarios, setMostrarUsuarios] = useState(false); // Estado para controlar a exibição da tabela de usuários
    const [mostrarRegistros, setMostrarRegistros] = useState(false); // Estado para controlar a exibição da tabela de registros de lixo

    const handleSubmit = (event) => {
        event.preventDefault();
        const novoUsuario = { email, senha };
        setUsuarios([...usuarios, novoUsuario]); // Adiciona o novo usuário ao estado
        const novoRegistro = { tipoLixo, data };
        setRegistrosLixo([...registrosLixo, novoRegistro]); // Adiciona o novo registro de lixo ao estado
        alert('Dados enviados com sucesso!');
        // Limpa os campos após o envio
        setEmail('');
        setSenha('');
        setTipoLixo('reciclavel');
        setData('');
    };

    const toggleMostrarUsuarios = () => {
        setMostrarUsuarios(!mostrarUsuarios);
        setMostrarRegistros(false); // Esconde a tabela de registros de lixo
    };

    const toggleMostrarRegistros = () => {
        setMostrarRegistros(!mostrarRegistros);
        setMostrarUsuarios(false); // Esconde a tabela de usuários
    };

    return (
        <div className="container">
            <h1>Tela de Administração</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="senha">Senha:</label>
                <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />

                <label htmlFor="tipoLixo">Tipo de Lixo:</label>
                <select id="tipoLixo" value={tipoLixo} onChange={(e) => setTipoLixo(e.target.value)} required>
                    <option value="reciclavel">Reciclável</option>
                    <option value="organico">Orgânico</option>
                    <option value="perigoso">Perigoso</option>
                    <option value="eletronico">Eletrônico</option>
                </select>

                <label htmlFor="data">Data:</label>
                <input type="date" id="data" value={data} onChange={(e) => setData(e.target.value)} required />

                <button type="submit">Enviar</button>
            </form>

            <button onClick={toggleMostrarUsuarios}>Ver Todos os Usuários</button>
            <button onClick={toggleMostrarRegistros}>Ver Registros de Lixo</button>

            {mostrarUsuarios && (
                <div>
                    <h2>Usuários Cadastrados</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Senha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario, index) => (
                                <tr key={index}>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.senha}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {mostrarRegistros && (
                <div>
                    <h2>Registros de Lixo Enviados</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Tipo de Lixo</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registrosLixo.map((registro, index) => (
                                <tr key={index}>
                                    <td>{registro .tipoLixo}</td>
                                    <td>{registro.data}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Adm;