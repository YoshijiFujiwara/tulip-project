import { Test, TestingModule } from '@nestjs/testing';
import { ExhibitsService } from './exhibits.service';
import { ExhibitRepsitory } from '../entities/exhibit.repository';
import { GroupRepository } from '../entities/group.repository';

const mockExhibitRepository = () => ({
  createExhibit: jest.fn(),
});
const mockGroupRepository = () => ({});

describe('ExhibitsService', () => {
  let exhibitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExhibitsService,
        { provide: ExhibitRepsitory, useFactory: mockExhibitRepository },
        { provide: GroupRepository, useFactory: mockGroupRepository },
      ],
    }).compile();

    exhibitsService = module.get<ExhibitsService>(ExhibitsService);
  });

  it('should be defined', () => {
    expect(exhibitsService).toBeDefined();
  });
});
