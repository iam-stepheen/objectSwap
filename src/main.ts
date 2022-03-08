import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  app.enableCors(); // TODO: Setup cors config based on FE's server IPs
  // app.use(csurf());
  app.setGlobalPrefix('/api/v1');

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Technical Interview')
    .setDescription('Technical Interview Api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
