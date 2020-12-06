import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

function tokenValidation(req: Request, res: Response, next: NextFunction) {
  const token: any = req.header('token');
  if (!token) res.status(401).json({ message: 'Auth Error' });
  try {
    const decoded:any = jwt.verify(token, 'secret');
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(500).send({ message: 'Invalid Token' });
  }
}

export default tokenValidation;
