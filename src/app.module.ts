import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { CustomersModule } from "./customers/customers.module";
import { UsersModule } from "./users/users.module";
import {LoggerMiddlewares} from "./Middlewares/Logger.middlewares";

@Module({
  imports: [CustomersModule,UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddlewares).forRoutes("*")
  }
}
