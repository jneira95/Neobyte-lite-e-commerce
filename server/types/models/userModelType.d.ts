import { Document } from 'mongoose';

interface UserModel {
  username: string;
  password: string;
  email: string;
  createAt: number;
  'shopping-cart': [object]
}

interface IUser extends UserModel, Document {}

export default IUser;
