import { Test, TestingModule } from '@nestjs/testing';
import { ContService } from './cont.service';

describe('ContService', () => {
  let service: ContService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContService],
    }).compile();

    service = module.get<ContService>(ContService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
