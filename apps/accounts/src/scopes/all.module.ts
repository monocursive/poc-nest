import { Module } from '@nestjs/common';
import { ShopInterceptor } from '@app/shop-interceptor';
import { UsersModule } from '../users/users.module';
import { ShopsModule } from '../shops/shops.module';
import { CommandModule } from '@app/command';

@Module({
  imports: [UsersModule, ShopsModule, ShopInterceptor, CommandModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
