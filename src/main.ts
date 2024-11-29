import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(process.env.PORT ?? 3000);
    console.log('Aplicação rodando em: ', `http://localhost:${3000}`)
  } catch (error) {
    console.log(error)
  }

}
bootstrap();
