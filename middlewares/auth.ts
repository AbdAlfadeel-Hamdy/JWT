import { Handler } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { UnauthenticatedError } from '../utils/appErrors.js';

const authenticateUser: Handler = (req: any, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer '))
    throw new UnauthenticatedError('No token provided');

  const token = authorization.split(' ')[1];

  if (!token || !process.env.JWT_SECRET)
    throw new UnauthenticatedError('Not authorized to access this route');

  try {
    const { username } = jwt.verify(
      token,
      process.env.JWT_SECRET
    ) as JwtPayload;
    if (!username) throw Error;
    req.username = username;
    next();
  } catch (error) {
    throw new UnauthenticatedError('Not authorized to access this route');
  }
};

export default authenticateUser;
