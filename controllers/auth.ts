import { Handler } from 'express';
import { StatusCodes } from 'http-status-codes';

export const login: Handler = async (req, res, next) => {
  res.status(StatusCodes.OK).json({ message: 'Hi' });
};
