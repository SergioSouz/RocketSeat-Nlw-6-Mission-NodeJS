import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IAuthenticateRequest {

   email: string;
   password: string;

}

class AuthenticateUserService {

   async execute({ email, password }: IAuthenticateRequest) {

      const usersRepositories = getCustomRepository(UsersRepositories)
      // verificar se email existe
      const userExists = await usersRepositories.findOne({
         email
      });

      if (!userExists) {
         throw new Error("Email/password incorrenct")

      }

      // verificar se passoword existe
      // 123456/ hash vai comparar as duas 
      const passwordMatch = await compare(password, userExists.password)

      if (!passwordMatch) {
         throw new Error("Email/password incorrenct")
      }


      // gerar token

      const token = sign({
         email: userExists.email
      }, "24603744302288c3adab1c307ec865bb", {
         subject: userExists.id,
         expiresIn: "1d"
      })

      return token

   }


}

export { AuthenticateUserService }