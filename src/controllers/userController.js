import HttpStatus from 'http-status-codes';
import * as userService from '../services/userService';
import { appendExceptionStack } from '../utils/exceptionUtils';
import { createSuccessResponse } from '../utils/responseGenerator';


export const createUser = (req, res, next) => {
  userService
    .createUser(req.body)
    .then((data) => res.status(HttpStatus.CREATED).json(createSuccessResponse(data)))
    .catch((err) => next(appendExceptionStack(err)));
};

export const getUserById = (req, res, next) => {
  userService
  .getUserById(req.params.id)
  .then((data) => res.json(createSuccessResponse(data)))
  .catch((err) => next(appendExceptionStack(err))); 
};
export const getUsers = (req, res, next) => {
  userService
  .getUsers(req.query)
  .then((data) => res.json(createSuccessResponse(data)))
  .catch((err) => next(appendExceptionStack(err))); 
};