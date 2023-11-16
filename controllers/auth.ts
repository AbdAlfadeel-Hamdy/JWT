import { Handler } from 'express';
import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../utils/appErrors.js';

export const login: Handler = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password)
    throw new BadRequestError('Please provide email and password');

  const token = jwt.sign({ username }, process.env.JWT_SECRET!, {
    expiresIn: '30d',
  });

  res.status(StatusCodes.OK).json({ message: 'user created', token });
};
