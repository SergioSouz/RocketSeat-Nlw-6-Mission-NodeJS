import { Request, Response, NextFunction } from 'express'



export function ansureAdmin(
   req: Request,
   res: Response,
   next: NextFunction
) {

   // Verificando seu o usuario é admin ou nao 
   const admin = true;

   if (admin) {

      return next();

   }
   return res.status(401).json({
      error: "User is not admin",

   });
}