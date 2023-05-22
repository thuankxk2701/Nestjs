import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { CustomersController } from "./controllers/customers/customers.controller";
import { CustomersService } from "./service/customers/customers.service";
import { ValidateCustomerMiddleware } from "./Middlewares/validate-customer.middleware";
import { ValidateCustomerAccountMiddleware } from "./Middlewares/validate-customer-account.middleware";

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(ValidateCustomerMiddleware, ValidateCustomerAccountMiddleware).forRoutes(CustomersController)
  }
}