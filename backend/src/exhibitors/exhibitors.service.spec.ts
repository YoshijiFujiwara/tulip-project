import { Test, TestingModule } from '@nestjs/testing';
import { ExhibitorsService } from './exhibitors.service';
import { ExhibitorRepository } from '../entities/exhibitor.repository';

const mockExhibitorRepository = () => ({
  createExhibitor: jest.fn(),
});

describe('ExhibitorsService', () => {
  let exhibitorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExhibitorsService,
        { provide: ExhibitorRepository, useFactory: mockExhibitorRepository },
      ],
    }).compile();

    exhibitorsService = module.get<ExhibitorsService>(ExhibitorsService);
  });

  it('should be defined', () => {
    expect(exhibitorsService).toBeDefined();
  });
});
