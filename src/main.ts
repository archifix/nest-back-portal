import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get(ConfigService);
  const PORT = config.get<number>('API_PORT');
  await app.listen(PORT || 4001, () => {
    console.log(`App started on port: $(PORT)`);
  });
}
bootstrap();
