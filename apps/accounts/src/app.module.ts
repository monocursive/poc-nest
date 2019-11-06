import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ShopsModule } from './shops/shops.module';

@Module({
  imports: [UsersModule, ShopsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
