import { Test, TestingModule } from '@nestjs/testing';
import { ClientsAddressController } from './clients-address.controller';

describe('ClientsAddressController', () => {
  let controller: ClientsAddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsAddressController],
    }).compile();

    controller = module.get<ClientsAddressController>(ClientsAddressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
