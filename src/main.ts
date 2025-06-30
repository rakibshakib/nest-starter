import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🔹 Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Todo List API')
    .setDescription('Simple CRUD API for managing todos')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // URL: http://localhost:3000/api

  await app.listen(3000);
  console.log('🚀 API running on: http://localhost:3000');
  console.log('📘 Swagger UI available at: http://localhost:3000/api');
}
bootstrap();
