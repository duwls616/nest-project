import { Test, TestingModule } from '@nestjs/testing';
import { ContController } from './cont.controller';

describe('ContController', () => {
  let controller: ContController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContController],
    }).compile();

    controller = module.get<ContController>(ContController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
