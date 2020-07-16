/* eslint-disable no-console */
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT);
  console.log(`Application is running on: http://localhost:${PORT}`);
  console.log(
    `Graphql-Playground available on: http://localhost:${PORT}/graphql`
  );
}
bootstrap();
