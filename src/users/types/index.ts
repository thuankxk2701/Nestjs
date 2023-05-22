import { Exclude } from "class-transformer";

export interface User {

  username:string;

  password:string;

  id:number

}

export class SerializeUser{
  username: string;
 @Exclude()
  password: string

  id:number
  constructor(partial :Partial<SerializeUser>) {
   Object.assign(this,partial)
  }
}