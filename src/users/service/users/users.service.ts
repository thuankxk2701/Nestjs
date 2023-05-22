import { Injectable } from "@nestjs/common";
import { SerializeUser, User } from "../../types";
import { plainToClass } from "class-transformer";
import { CreateUserDto } from "../../Dto/CreateUser.dto";
import { InjectRepository } from "@nestjs/typeorm";
import {User as UserEntities} from '../../../TypeOrm'
import { Repository } from "typeorm";
import { encodePassword } from "../../../utils/bcrypt";


@Injectable()
export class UsersService{
  constructor(@InjectRepository( UserEntities) private readonly userRepository:Repository<UserEntities>) {
  }
  private users:User[]=[]
 public getUsers() : User[]{
   const newUsers= this.userRepository.find()
    return this.users.map((user)=>plainToClass(SerializeUser,user))
  }


  public  getUserByUsername(username : string){

   return this.users.find(user=>user.username === username)
  }

  public getUserById(userId:number){
   return this.users.find(user=>user.id== userId)
  }

  createUser(createUserDto:CreateUserDto){
    const password=encodePassword(createUserDto.password)
   const newUser= this.userRepository.create({...createUserDto,password})
    return this.userRepository.save(newUser)
  }

  findUserByUsername(username:string){
    return this.userRepository.findOneBy({username})
  }

  findUserById(id:number){
     return this.userRepository.findOne(id);
}
}