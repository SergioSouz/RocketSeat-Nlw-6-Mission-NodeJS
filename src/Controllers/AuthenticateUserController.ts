import { Request, response, Response } from 'express'
import { AuthenticateUserService } from '../services/AlthetucateUserServive'


class AuthenticateUserController {

   async hancle(req: Request, res: Response) {

      const { email, password } = req.body



      const authenticateUserService = new AuthenticateUserService();

      const token = await authenticateUserService.execute({
         email,
         password,
      });

      return res.json(token);


   }
}

export { AuthenticateUserController }