import React from 'react';
import { Link } from 'react-router-dom';

function erro() {
    return (
        <div className='quem'>
            <h1>Ocoreu um erro </h1>
            <h2>Causa pode ser  nome, CEP, cpf, numero ou algum problema em nosso sistema </h2>
            <h2>Revise suas informações e tente novamente </h2>
            <p >
                Voltar  <a href="./tudo">Aqui!</a>
            </p>
        </div>



    );
}

export default erro;
