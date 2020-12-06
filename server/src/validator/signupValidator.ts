import {
  Request, Response, NextFunction,
} from 'express';
import { check, validationResult } from 'express-validator';

const signupValidation = [
  check('username', 'Please Enter a Valid Username')
    .not()
    .isEmpty(),
  check('email', 'Please enter a valid email')
    .isEmail(),
  check('password', 'Please enter a valid password').isLength({
    min: 6,
  }),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array() }); }
    return next();
  },
];

export default signupValidation;
