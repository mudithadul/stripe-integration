import logger from '../utils/logger';
import * as userRepository from '../repositories/userRepository';
import withTransaction from '../database/withTransaction';

export const createUser = async (user) => {
  logger.info("muditha Sumanathunga");
  return withTransaction(async (txn, _user) => {
    return userRepository.createUser(_user, txn);
  }, user);
};

export const getUserById = async (userId, _txn) => {
  logger.info("muditha Sumanathunga");
};

export const getUsers = async (userId, _txn) => {
  logger.info("muditha Sumanathunga");
};