import { Injectable, NestMiddleware } from "@nestjs/common";
import {Request,Response,NextFunction} from "express"

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware{
  use(req:Request,rep:Response,next:NextFunction){
    console.log("Hello,world.I am inside ValidateCustomerMiddleware! ");
    next()
  }
}