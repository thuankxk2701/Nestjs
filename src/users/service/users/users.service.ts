import { Injectable } from "@nestjs/common";
import { SerializeUser, User } from "../../types";
import { plainToClass } from "class-transformer";


@Injectable()
export class UsersService{

  private users:User[ ]= [
    {
      username:"thuan",
      password:"123"
    },  {
      username:"thuan1",
      password:"1234"
    },  {
      username:"thuan2",
      password:"12345"
    }
  ];

 public getUsers() : User[]{
    return this.users.map((user)=>plainToClass(SerializeUser,user))
  }

  public  getUserByUsername(username : string){
   return this.users.find(user=>user.username === username)
  }
}