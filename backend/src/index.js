const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

/**
 * Rota / recurso
 * 
 */

 /**
  * Método HTTP
  * GED: Buscar uma informação do back-end
  * POST: Criar uma informação no back-ed
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros
   * 
   * Query params: Parâmetros nomeados enviados na rotaapós o "?", servem para (filtros, paginação)
   * Route params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisitação, utilizado para criar ou alterar recursos
   */

/**
 * SQL: MYSQL, SQLITE, POSTRESQL, ORACLE MSSQL
 * Nosql: MongoDB, CouchDB, etc...
 */
/**
 * Driver: select * from users
 * Query Builder: 
 */

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

