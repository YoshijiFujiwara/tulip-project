import { Test, TestingModule } from '@nestjs/testing';
import { ExhibitorsService } from './exhibitors.service';
import { ExhibitRepsitory } from '../entities/exhibit.repository';

const mockExhibitorRepository = () => ({
  createExhibitor: jest.fn(),
});

describe('ExhibitorsService', () => {
  let exhibitorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExhibitorsService,
        { provide: ExhibitRepsitory, useFactory: mockExhibitorRepository },
      ],
    }).compile();

    exhibitorsService = module.get<ExhibitorsService>(ExhibitorsService);
  });

  it('should be defined', () => {
    expect(exhibitorsService).toBeDefined();
  });
});
