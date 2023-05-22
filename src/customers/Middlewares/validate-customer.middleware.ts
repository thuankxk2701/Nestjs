import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import {Request,Response,NextFunction} from "express"

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware{
  use(req:Request,rep:Response,next:NextFunction){
    console.log("Hello,world.I am inside ValidateCustomerMiddleware! ");
    const {authorization} = req.headers;
    if(!authorization){
      throw new HttpException("No Authorization Token Provided",HttpStatus.FORBIDDEN)
    }
    if(authorization === '123'){
      next()
    } else{
      throw new HttpException("Invalid Authorization Token Provided",HttpStatus.FORBIDDEN)
    }

  }
}