import { Test, TestingModule } from '@nestjs/testing';
import { ExhibitorService } from './exhibitor.service';

describe('ExhibitorService', () => {
  let service: ExhibitorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExhibitorService],
    }).compile();

    service = module.get<ExhibitorService>(ExhibitorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
