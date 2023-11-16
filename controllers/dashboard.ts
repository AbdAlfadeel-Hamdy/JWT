import { Handler } from 'express';
import { StatusCodes } from 'http-status-codes';

export const getDashboardInfo: Handler = async (req: any, res, next) => {
  const luckyNumber = Math.floor(Math.random() * 100) + 1;
  res.status(StatusCodes.OK).json({
    message: `Hello, ${req.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};
