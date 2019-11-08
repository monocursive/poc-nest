import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopInterceptor } from '@app/shop-interceptor';

@Module({
  imports: [ShopInterceptor],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
