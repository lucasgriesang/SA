
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

server.post('/login', async (request, reply) => {
    const login = request.body;
    const exist = await databasePostgres.verificarSeUsuarioExiste(login);
    if (exist[0]) {
        return reply.status(200).send('Dale! é os Guri');
    } else {
        return reply.status(400).send('nao deu boa');
    }
})

server.post('/cadastro', async (request, reply) => {
    const cadastro = request.body;
    const exist = await databasePostgres.cadastroCriar(login);
    return reply.status(400).send('Deu Bom');
})



// CREATE LIXO
server.post('/lixoEletronico', async (request, reply) => {
    const lixoEletronico = request.lixoEletronico;
    await databasePostgres.createlixo(lixoEletronico);
    if (exist[0]) {
        return reply.status(200).send(' vermelho');
    } else {
        return reply.status(400).send(' verde ');
    }
})


// CREATE
server.post('/users', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createUser(body);
    return reply.status(201).send();
})

// READE
server.get('/users', async () => {
    const users = await databasePostgres.listUsers();
    return users;
});

// UPDATE
server.put('/users/:id', async (request, reply) => {
    const userID = request.params.id;
    const body = request.body;
    await databasePostgres.updateUser(userID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/users/:id', async (request, reply) => {
    const userID = request.params.id;
    await databasePostgres.deleteUser(userID);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
