import { Controller, Get, Post, Body } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ShopDTO } from './dto/shop.dto';
import { ShopsService } from './shops.service';

@Controller('shops')
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}

  @Get('/backup')
  backupShops(): Observable<ShopDTO[]> {
    return this.shopsService.backupShopsAction();
  }

  @Post('/create')
  createShop(@Body() shopDTO: ShopDTO) {
    return this.shopsService.createShopAction(shopDTO);
  }
}
