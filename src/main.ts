import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NEST_APP_PORT} from "./constants";
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1.0/api')
  await app.listen(NEST_APP_PORT);
  if(module.hot){
    module.hot.accept();
    module.hot.dispose(()=>app.close())
  }
}
bootstrap();
