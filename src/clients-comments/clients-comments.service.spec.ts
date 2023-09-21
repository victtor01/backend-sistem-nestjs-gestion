import { Test, TestingModule } from '@nestjs/testing';
import { ClientsCommentsService } from './clients-comments.service';

describe('ClientsCommentsService', () => {
  let service: ClientsCommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientsCommentsService],
    }).compile();

    service = module.get<ClientsCommentsService>(ClientsCommentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
