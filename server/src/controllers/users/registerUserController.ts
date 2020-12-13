import { Request, Response } from 'express';

function registeredUserController(UserModel: any) {
  function getUserById(req: Request, res: Response) {
    const { id } = req.params;
    UserModel.findById(id, (errorFindUser: any, user: object) => {
      if (errorFindUser) res.send(errorFindUser);
      res.json(user);
    });
  }

  return { getUserById };
}

export default registeredUserController;
