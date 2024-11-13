import { sql } from './db.js'

sql`
  CREATE TABLE lixoEletronico (
      id text PRIMARY KEY,
      cep character varying(),
      tipo character varying(255),
      data character varying(255)

      );
`.then(() => {
  console.log('tabela criada');
})