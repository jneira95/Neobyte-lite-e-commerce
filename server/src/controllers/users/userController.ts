import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

function userController(UserModel: any) {
  const userSignUp = async (req: Request, res: Response): Promise<any> => {
    const { username, email, password } = req.body;
    try {
      const isUserRegistered = await UserModel.exists({ email });
      if (isUserRegistered) return res.status(400).json({ msg: 'USER_ALREADY_EXIST' });

      const user = new UserModel({
        username,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await UserModel.create(user);

      const { id } = user;
      const payload = {
        id,
      };

      jwt.sign(payload, 'secret', { expiresIn: 10000 },
        (error: any, token: any) => {
          if (error) throw error;
          res.status(200).json({ token });
        });
    } catch (error) {
      res.status(500).send('ERROR_SAVING_USER');
    }
    return true;
  };

  const userLogIn = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const user = await UserModel.findOne({ email });
      if (!user) return res.status(400).json({ msg: 'USER_NOT_EXIST' });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) res.status(400).json({ msg: 'INCORRECT_PASSWORD' });

      const { id } = user;
      const payload = {
        id,
      };

      jwt.sign(payload, 'secret', { expiresIn: 3600 },
        (error, token) => {
          if (error) throw error;
          res.status(200).json({ token });
        });
    } catch (error) {
      res.status(500).json({ msg: 'INTERNAL_SERVER_ERROR' });
    }
    return true;
  };

  const tokenValidation = async (req: Request, res: Response) => {
    try {
      const query = req.body.user;
      const user = await UserModel.findById(query);
      res.json(user);
    } catch (error) {
      res.send({ msg: 'ERROR_FETCHING_USER' });
    }
  };

  return { userSignUp, userLogIn, tokenValidation };
}

export default userController;
