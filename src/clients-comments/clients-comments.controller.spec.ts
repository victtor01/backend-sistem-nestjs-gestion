import { Test, TestingModule } from '@nestjs/testing';
import { ClientsCommentsController } from './clients-comments.controller';

describe('ClientsCommentsController', () => {
  let controller: ClientsCommentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsCommentsController],
    }).compile();

    controller = module.get<ClientsCommentsController>(ClientsCommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
