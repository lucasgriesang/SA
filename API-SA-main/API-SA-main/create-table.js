import { sql } from './db.js';

sql`
    CREATE TABLE users (
        id text PRIMARY KEY NOT NULL,
        name VARCHAR(200),
        password VARCHAR(200)
    )
`.then(() => {})

sql`
    CREATE TABLE cadastrologinusuario (
        idusuario INT PRIMARY KEY NOT NULL,
        idcadastro INT,
        idlogin INT,
        emailsenhacadastro VARCHAR(200),
        emailsenhalogin VARCHAR(200)
    )
`.then(() => {
    console.log('Tabela cadastrologinusuario criada');
    return sql`
        CREATE TABLE cadastrolixo (
            id INT PRIMARY KEY NOT NULL,
            cep VARCHAR(8),
            tipolixo VARCHAR(200),
            data DATE
        )
    `;
}).then(() => {
    console.log('Tabela cadastrolixo criada');
    return sql`
        INSERT INTO cadastrologinusuario (idusuario, idcadastro, idlogin, emailsenhacadastro, emailsenhalogin) 
        VALUES 
            (001, 001, 001, 'pedro@gmail.com', '123321'),
            (002, 002, 002, 'maria@gmail.com', '654321'),
            (003, 003, 003, 'joao@gmail.com', '789456'),
            (004, 004, 004, 'ana@gmail.com', '321654'),
            (005, 005, 005, 'carlos@gmail.com', '987654'),
            (006, 006, 006, 'beatriz@gmail.com', '456123'),
            (007, 007, 007, 'roberto@gmail.com', '123789'),
            (008, 008, 008, 'lucia@gmail.com', '654987'),
            (009, 009, 009, 'marcos@gmail.com', '789321'),
            (010, 010, 010, 'julia@gmail.com', '456789');
    `;
}).then(() => {
    console.log('Dados inseridos na tabela cadastrologinusuario');
    return sql`
        INSERT INTO cadastrolixo (id, cep, tipolixo, data) 
        VALUES 
            (001, '12345678', 'Celular', '2023-01-01'),
            (002, '87654321', 'PC', '2023-02-15'),
            (003, '11223344', 'Computador', '2023-03-22'),
            (004, '44332211', 'Notebook', '2023-04-10'),
            (005, '55667788', 'Tablet', '2023-05-05'),
            (006, '88776655', 'Televisão', '2023-06-18'),
            (007, '99887766', 'Impressora', '2023-07-30'),
            (008, '66554433', 'Micro-ondas', '2023-08-25'),
            (009, '33445566', 'Geladeira', '2023-09-14'),
            (010, '77665544', 'Máquina de Lavar', '2023-10-01');
    `;
}).then(() => {
    console.log('Dados inseridos na tabela cadastrolixo');
    return sql`
        SELECT * FROM cadastrolixo;
    `;
}).then((result) => {
    console.log('Consulta 1 (SELECT *):', result);
    return sql`
        SELECT id, tipolixo FROM cadastrolixo;
    `;
}).then((result) => {
    console.log('Consulta 2 (SELECT id, tipolixo):', result);
}).catch((error) => {
    console.error('Erro ao executar as queries:', error);
});
