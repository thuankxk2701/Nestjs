import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./service/auth.service";
import { UsersService } from "../users/service/users/users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../TypeOrm";
import { LocalStrategy } from "./utils/LocalStrategy";
import { PassportModule } from "@nestjs/passport";
import { SessionSerializer } from "./utils/SessionSerializer";
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [{
    provide: "AUTH_SERVICE",
    useClass: AuthService
  },
  {
    provide: "USER_SERVICE",
    useClass: UsersService
  },
    LocalStrategy,
     SessionSerializer]
})
export class AuthModule { }