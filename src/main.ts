import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NEST_APP_PORT} from "./constants";
import * as session from 'express-session';
import * as passport from 'passport';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1.0/api')
  app.enableCors()
  app.use(session({
    name: 'NESTJS_SESSION_ID',
    secret: 'jkdfkghsdjklgwelrthwejkhgsdd',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000
    }
  }));

  app.use(passport.initialize())
  app.use(passport.session())
  await app.listen(NEST_APP_PORT);
  if(module.hot){
    module.hot.accept();
    module.hot.dispose(()=>app.close())
  }
}
bootstrap();
