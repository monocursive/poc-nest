import { Module } from '@nestjs/common';
import { ShopInterceptor } from '@app/shop-interceptor';
import { UsersModule } from './users/users.module';
import { ShopsModule } from './shops/shops.module';

@Module({
  imports: [UsersModule, ShopsModule, ShopInterceptor],
  controllers: [],
  providers: [],
})
export class AppModule {}
