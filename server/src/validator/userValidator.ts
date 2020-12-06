import {
  Request, Response, NextFunction,
} from 'express';
import { check, validationResult } from 'express-validator';

const validators = {
  loginValidation: [
    check('email', 'NO_VALID_EMAIL').isEmail(),
    check('password', 'NO_VALID_PASSWORD_MIN_LENGTH_6').isLength({
      min: 6,
    }),
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
      return next();
    },
  ],
  signupValidation: [
    check('username', 'NO_VALID_USERNAME')
      .not()
      .isEmpty(),
    check('email', 'NO_VALID_EMAIL')
      .isEmail(),
    check('password', 'NO_VALID_PASSWORD_MIN_LENGTH_6').isLength({
      min: 6,
    }),
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
      return next();
    },
  ],
};

export default validators;
