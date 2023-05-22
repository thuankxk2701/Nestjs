import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param, ParseIntPipe, Post, UseFilters,
  UseInterceptors, UsePipes, ValidationPipe
} from "@nestjs/common";
import { UsersService } from "../../service/users/users.service";
import { SerializeUser } from "../../types";
import { UserNotFoundException } from "../../exceptions/UserNotFound.exception";
import { HttpExceptionFilter } from "../../filters/HttpException.filter";
import { CreateUserDto } from "../../Dto/CreateUser.dto";


@Controller("users")
export class UsersController{

  constructor(@Inject("USER_SERVICE") private  readonly usersService :UsersService) {
  }

  @Get("")
  getUsers(){
  return this.usersService.getUsers()
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:username")
  getByUsername(@Param("username") username : string){
   const user = this.usersService.getUserByUsername(username);
   if(user)return new SerializeUser(user)
    else throw new HttpException('User not found',HttpStatus.BAD_REQUEST)
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFilter)
  @Get('id/:id')
  getById(@Param('id',ParseIntPipe) id :number){
    const user = this.usersService.getUserById(id);
    if(user){
      return new SerializeUser(user);
    }else {
      throw new UserNotFoundException()
    }
  }


  @Post("create")
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto:CreateUserDto){

   return this.usersService.createUser(createUserDto)
}

}