import { Router } from 'express';
import userController from '../controllers/users/userController';
import signupValidation from '../validator/signupValidator';
import loginValidation from '../validator/loginValidator';
import tokenValidation from '../validator/tokenValidator';

function userRouter(UserModel: any) {
  const router = Router();
  const users = userController(UserModel);

  router.route('/signup')
    .post(signupValidation, users.userSignUp);

  router.route('/login')
    .post(loginValidation, users.userLogIn);

  router.route('/me')
    .get(tokenValidation, users.tokenValidation);

  return router;
}

export default userRouter;
