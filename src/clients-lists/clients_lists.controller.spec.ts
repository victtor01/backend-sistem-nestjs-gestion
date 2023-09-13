import { Test, TestingModule } from '@nestjs/testing';
import { ClientsListsController } from './clients_lists.controller';

describe('ClientsListsController', () => {
  let controller: ClientsListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsListsController],
    }).compile();

    controller = module.get<ClientsListsController>(ClientsListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
