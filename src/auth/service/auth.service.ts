import { Inject, Injectable } from "@nestjs/common";
import { UsersService } from "../../users/service/users/users.service";
import { comparePassword } from "../../utils/bcrypt";


@Injectable()
export class AuthService{

  constructor(@Inject("USER_SERVICE") private readonly userService:UsersService) {
  }
  async  validateUser(username:string, password:string){
    const userDB= await   this.userService.findUserByUsername(username);
    const matched= comparePassword(password,userDB.password)
    console.log(matched);
    if(userDB && matched){
      return userDB
    }
    return  null
  }

}