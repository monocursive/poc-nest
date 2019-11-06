import { Module } from '@nestjs/common';
import { ShopInterceptor } from './shop-interceptor';

@Module({
  providers: [ShopInterceptor],
  exports: [ShopInterceptor],
})
export class ShopInterceptorModule {}
