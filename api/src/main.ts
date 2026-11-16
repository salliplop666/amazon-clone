import * as dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']); // Forzar DNS de Google

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
