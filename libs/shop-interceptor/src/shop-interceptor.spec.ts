import { Test, TestingModule } from '@nestjs/testing';
import { ShopInterceptor } from './shop-interceptor';

describe('ShopInterceptor', () => {
  let service: ShopInterceptor;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopInterceptor],
    }).compile();

    service = module.get<ShopInterceptor>(ShopInterceptor);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
