import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthRequest,UserPayload } from '../types/type';

// checks and verifies if user is having secret token or not, if yes then it will decode the token and attach the user info to the request object for further use in protected routes.

const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'No token provided, authorization denied' })
    return
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as UserPayload

    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid or has expired' })
  }
}

export default authMiddleware