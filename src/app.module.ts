import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { CustomersModule } from "./customers/customers.module";
import { UsersModule } from "./users/users.module";
import {LoggerMiddlewares} from "./Middlewares/Logger.middlewares";
import { TypeOrmModule } from "@nestjs/typeorm";
import entities from './TypeOrm/index'
import { AuthModule } from "./auth/auth.module";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [CustomersModule,UsersModule,AuthModule,TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'sample',
    password: 'sample',
    database: 'SampleDB',
    entities,
    synchronize: true,
  }),
    PassportModule.register({
      session: true
    })],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddlewares).forRoutes("*")
  }
}
