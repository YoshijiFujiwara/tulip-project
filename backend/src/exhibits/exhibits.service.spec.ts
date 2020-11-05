import { Test, TestingModule } from '@nestjs/testing';
import { ExhibitsService } from './exhibits.service';

describe('ExhibitsService', () => {
  let exhibitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExhibitsService],
    }).compile();

    exhibitsService = module.get<ExhibitsService>(ExhibitsService);
  });

  it('should be defined', () => {
    expect(exhibitsService).toBeDefined();
  });
});
