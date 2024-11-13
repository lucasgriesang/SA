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
    const password = user.password;
    
    await sql`insert into users (id, name, password)
              values (${id}, ${name}, ${password})`;
  }

  async cadastroCriar(cadastro) {
    const id = randomUUID();
    console.log('id', id);
    const name = user.name;
    const password = user.password;
    
    await sql`insert into users (id, name, password)
              values (${id}, ${name}, ${password})`;
  }

  async createUser(user) {
    const id = randomUUID();
    console.log('id', id);
    const name = user.name;
    const password = user.password;
    
    await sql`insert into users (id, name, password)
              values (${id}, ${name}, ${password})`;
  }
  
  async createlixo(lixo) {
    const id = randomUUID();
    console.log('id', id);
    const cep = lixo.cep;
    const tipo = lixo.tipo;
    const data = lixo.data;
    
    await sql`insert into users (id, cep, tipo, data)
              values (${id}, ${cep}, ${tipo}, ${data})`;
  }

  async updateUser(id, user) {
    const name = user.name;
    const password = user.password;

    await sql`update users set 
              name = ${name},
              password = ${password}
              where id = ${id}`;
  }

  async deleteUser(id) {
    await sql`delete from users where id = ${id}`;
  }

  // Métodos para cadastrologinusuario
  async createCadastroLoginUsuario(cadastro) {
    const { idusuario, idcadastro, idlogin, emailsenhacadastro, emailsenhalogin } = cadastro;
    await sql`insert into cadastrologinusuario (idusuario, idcadastro, idlogin, emailsenhacadastro, emailsenhalogin)
              values (${idusuario}, ${idcadastro}, ${idlogin}, ${emailsenhacadastro}, ${emailsenhalogin})`;
  }

  async getCadastroLoginUsuario(idusuario) {
    return await sql`select * from cadastrologinusuario where idusuario = ${idusuario}`;
  }

  async updateCadastroLoginUsuario(idusuario, updateData) {
    const { idcadastro, idlogin, emailsenhacadastro, emailsenhalogin } = updateData;
    await sql`update cadastrologinusuario set 
              idcadastro = ${idcadastro}, 
              idlogin = ${idlogin},
              emailsenhacadastro = ${emailsenhacadastro},
              emailsenhalogin = ${emailsenhalogin}
              where idusuario = ${idusuario}`;
  }

  async deleteCadastroLoginUsuario(idusuario) {
    await sql`delete from cadastrologinusuario where idusuario = ${idusuario}`;
  }

  // Métodos para cadastrolixo
  async createCadastroLixo(lixo) {
    const id = randomUUID();
    console.log('id', id);
    const { cep, tipolixo, data } = lixo;
    
    await sql`insert into cadastrolixo (id, cep, tipolixo, data)
              values (${id}, ${cep}, ${tipolixo}, ${data})`;
  }

  async getCadastroLixo(id) {
    return await sql`select * from cadastrolixo where id = ${id}`;
  }

  async updateCadastroLixo(id, updateData) {
    const { cep, tipolixo, data } = updateData;
    await sql`update cadastrolixo set 
              cep = ${cep}, 
              tipolixo = ${tipolixo},
              data = ${data}
              where id = ${id}`;
  }

  async deleteCadastroLixo(id) {
    await sql`delete from cadastrolixo where id = ${id}`;
  }
}
