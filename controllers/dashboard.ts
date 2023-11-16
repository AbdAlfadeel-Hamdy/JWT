import { Handler } from 'express';
import { StatusCodes } from 'http-status-codes';

export const dashboard: Handler = async (req, res, next) => {
  const luckyNumber = Math.floor(Math.random() * 100) + 1;
  res.status(StatusCodes.OK).json({ message: 'Hi', secret: luckyNumber });
};
