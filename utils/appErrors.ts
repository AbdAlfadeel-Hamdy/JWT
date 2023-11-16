import { StatusCodes } from 'http-status-codes';

export default class AppError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends AppError {
  constructor(message: string) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
export class UnauthenticatedError extends AppError {
  constructor(message: string) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}

// export const createAppError = (message: string, statusCode: number) =>
//   new AppError(message, statusCode);
