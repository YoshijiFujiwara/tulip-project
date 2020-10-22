import { Test, TestingModule } from '@nestjs/testing';
import { ExhibitorController } from './exhibitor.controller';

describe('ExhibitorController', () => {
  let controller: ExhibitorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExhibitorController],
    }).compile();

    controller = module.get<ExhibitorController>(ExhibitorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
