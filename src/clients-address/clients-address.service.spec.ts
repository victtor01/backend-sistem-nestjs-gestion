import { Test, TestingModule } from '@nestjs/testing';
import { ClientsAddressService } from './clients-address.service';

describe('ClientsAddressService', () => {
  let service: ClientsAddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientsAddressService],
    }).compile();

    service = module.get<ClientsAddressService>(ClientsAddressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
