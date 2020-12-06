import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

function userController(UserModel: any) {
  const userSignUp = async (req: Request, res: Response): Promise<any> => {
    const { username, email, password } = req.body;
    try {
      const isUserRegistered = await UserModel.exists({ email });
      if (isUserRegistered) res.status(400).json({ msg: 'User Already Exists' });
      const user = new UserModel({
        username,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await UserModel.create(user);
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, 'secret', { expiresIn: 10000 },
        (error: any, token: any) => {
          if (error) throw error;
          res.status(200).json({ token });
        });
    } catch (error) {
      res.status(500).send('Error in Saving');
    }
    return console.log('end');
  };

  const userLogIn = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(email, password);

    try {
      const user = await UserModel.findOne({ email });
      if (!user) res.status(400).json({ msg: 'User Not Exist' });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) res.status(400).json({ msg: 'Incorrect Password !' });

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, 'secret', { expiresIn: 3600 },
        (error, token) => {
          if (error) throw error;
          res.status(200).json({ token });
        });
    } catch (error) {
      res.status(500).json({ msg: 'Server Error' });
    }
    return console.log('done');
  };

  const tokenValidation = async (req: Request, res: Response) => {
    try {
      const user = await UserModel.findById(req.user);
      res.json(user);
    } catch (e) {
      res.send({ message: 'Error in Fetching user' });
    }
  };

  return { userSignUp, userLogIn, tokenValidation };
}

export default userController;
