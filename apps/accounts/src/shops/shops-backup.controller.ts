import {
  Controller,
  Get,
  Post,
  Body,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ShopDTO } from './dto/shop.dto';
import { ShopsService } from './shops.service';
import { ShopInterceptor } from '@app/shop-interceptor';
import { AuthGuard } from '@app/auth-guard';

@UseInterceptors(ShopInterceptor)
@UseGuards(AuthGuard)
@Controller('shops-backup')
export class ShopsBackupController {
  constructor(private readonly shopsService: ShopsService) {}

  @Get('/')
  backupShops(): Observable<ShopDTO[]> {
    return this.shopsService.backupShopsAction();
  }
}
