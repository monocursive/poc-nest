import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { ShopDTO } from './dto/shop.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class ShopsService {
  backupShopsAction(): Observable<ShopDTO[]> {
    const shops: ShopDTO[] = [
      { psxId: '1234', user: { name: 'toto', firebaseId: '1234' } },
      { psxId: '12345', user: { name: 'titi', firebaseId: '12345' } },
    ];
    return of(shops);
  }

  createShopAction(shop: ShopDTO): Observable<ShopDTO> {
    return of(shop);
  }
}
