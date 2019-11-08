import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsCreateController } from './shops-create.controller';
import { ShopsBackupController } from './shops-backup.controller';
import { ShopInterceptor } from '@app/shop-interceptor';
import { AuthGuard } from '@app/auth-guard';
@Module({
  imports: [ShopInterceptor, AuthGuard],
  providers: [ShopsService],
  controllers: [ShopsCreateController, ShopsBackupController],
})
export class ShopsModule {}
