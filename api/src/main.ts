import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import * as process from "process";

import * as dotenv from "dotenv";
dotenv.config();

//Lisää

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap();
