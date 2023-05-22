import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import {Request,Response,NextFunction} from 'express'

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware{
  use(req:Request,res:Response,next:NextFunction){
    const  {valid}=  req.headers;
    console.log(valid);
    console.log("Hello,world.I am inside ValidateCustomerAccountMiddleware! ");
    if(valid){
      next()
    }else{
      throw new HttpException("Account invalid",HttpStatus.UNAUTHORIZED)
    }
  }
}