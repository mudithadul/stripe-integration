import { getDbConnection, getSchemaName } from "../database/dbConnection";
import { QueryTypes } from 'sequelize';

export const createUser = async (user, _txn) => {
  const email = user.email;
  const txn = _txn || (await getDbConnection());
  const schema = getSchemaName();

  const query = `INSERT INTO ${schema}.user (email)
                VALUES (:email) RETURNING *`;

  return txn
    .query(query, { type: QueryTypes.INSERT, replacements: { email } })
    .then(([row]) => row[0]);

}

export const getUserById = async (userId, _txn) => {
  const txn = _txn || (await getDbConnection());
  const schema = getSchemaName();

  const query = `SELECT * FROM ${schema}.user where id=:userId`;
  return txn.query(query, { type: QueryTypes.SELECT, replacements: { userId } }); 
}

export const getUsers = async (queryIn, _txn) => {
  const txn = _txn || (await getDbConnection());
  const schema = getSchemaName();

  const query = `SELECT * FROM ${schema}.user`;
  return txn.query(query, { type: QueryTypes.SELECT, replacements: {  } }); 
}