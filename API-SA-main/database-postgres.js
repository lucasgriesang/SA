import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async verificarSeUsuarioExiste(credentials) {
    return await sql`select * from users where name = ${credentials.name} and password = ${credentials.password}`;
  }

  async listUsers() {
    const users = await sql`select * from users`;
    return users;
  }


  async createUser(user) {
    const id = randomUUID();
    console.log('id', id);
    const name = user.name;
    const password = user.password
    
    await sql`insert into users (id, name, password)
    values (${id}, ${name}, ${password} )`
  }

  async cadastroCriar(cadastro) {
    const id = randomUUID();
    console.log('id', id);
    const name = user.name;
    const password = user.password
    
    await sql`insert into users (id, name, password)
    values (${id}, ${name}, ${password} )`
  }

  async createUser(user) {
    const id = randomUUID();
    console.log('id', id);
    const name = user.name;
    const password = user.password
    
    await sql`insert into users (id, name, password)
    values (${id}, ${name}, ${password} )`
  }
  
  async createlixo(lixo) {
    const id = randomUUID();
    console.log('id', id);
    const cep = lixo.cep
    const tipo = lixo.tipo
    const data = lixo.data
    
    await sql`insert into users (id, cep,tipo, data )
    values (${id}, ${cep}, ${tipo},${data} )`
  }


  async updateUser(id, user) {
    const name = user.name;
    const password = user.password;

    await sql`update users set 
        name = ${name},
        password = ${password}
  
        where id = ${id}
    `;
  }

  async deleteUser(id) {
    await sql`delete from users where id = ${id}`
  }

}

