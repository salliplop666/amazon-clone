import * as dns from 'dns';
// Forzar a Node.js a usar el DNS de Google antes de cualquier otra cosa
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  // Render usa process.env.PORT, y debe escuchar en 0.0.0.0
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
