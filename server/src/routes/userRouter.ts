import { Router } from 'express';
import userController from '../controllers/users/userController';
import validator from '../validator/userValidator';
import tokenValidation from '../validator/tokenValidator';

function userRouter(UserModel: any) {
  const router = Router();
  const users = userController(UserModel);

  router.route('/signup')
    .post(validator.signupValidation, users.userSignUp);

  router.route('/login')
    .post(validator.loginValidation, users.userLogIn);

  router.route('/profile')
    .get(tokenValidation, users.tokenValidation);

  return router;
}

export default userRouter;
