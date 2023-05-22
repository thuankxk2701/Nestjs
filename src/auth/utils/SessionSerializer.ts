import { PassportSerializer } from "@nestjs/passport";
import { Inject } from "@nestjs/common";
import { UsersService } from "../../users/service/users/users.service";
import { User } from "../../TypeOrm";

export class SessionSerializer extends PassportSerializer{
  constructor(@Inject('USER_SERVICE') private readonly  userService:UsersService) {
    super();
  }

  serializeUser(user:User,done:(err,user : User)=>void) {
    console.log("Serialized");
    done(null,user)
  }

  async  deserializeUser(user:User, done:(err,user:User)=>void){
    console.log("Deserialized");
    const userDB = await this.userService.findUserById(user.id);

    return userDB ? done(null,userDB): done(null,null)
  }
}