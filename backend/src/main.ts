import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  // localhostでのhttps化に必要なファイルの読み込み

  const keyFile = fs.readFileSync(__dirname + '/../localhost-key.pem');
  const certFile = fs.readFileSync(__dirname + '/../localhost.pem');

  const httpOptions = process.env.PRODUCTION_MODE
    ? undefined
    : {
        // https設定
        httpsOptions: {
          key: keyFile,
          cert: certFile,
        },
      };
  const app = await NestFactory.create(AppModule, httpOptions);

  app.setGlobalPrefix('api');

  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('API description')
    .setVersion('1.0')
    .addServer('/')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.BACKEND_INNER_PORT as string);
}
bootstrap();
