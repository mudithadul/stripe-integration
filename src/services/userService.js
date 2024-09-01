import logger from '../utils/logger';
import * as userRepository from '../repositories/userRepository';
import withTransaction from '../database/withTransaction';

export const createUser = async (user) => {
  return withTransaction(async (txn, _user) => {
    return userRepository.createUser(_user, txn);
  }, user);
};

export const getUserById = async (userId, _txn) => {
  return userRepository.getUserById(userId, _txn);
};

export const getUsers = async (query, _txn) => {
  return userRepository.getUsers(query);
};