import { NestFactory } from '@nestjs/core';
import { AppModule } from './scopes/all.module';
import { CommandModule, CommandService } from '@app/command';

(async () => {
  const app = await NestFactory.createApplicationContext(AppModule);
  app
    .select(CommandModule)
    .get(CommandService)
    .exec();
})();
