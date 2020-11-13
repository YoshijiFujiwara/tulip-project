import { Test, TestingModule } from '@nestjs/testing';
import { ExhibitsService } from './exhibits.service';
import { ExhibitRepsitory } from '../entities/exhibit.repository';
import { GroupRepository } from '../entities/group.repository';
import { ExhibitorEntity } from '../entities/exhibitor.entity';

const mockExhibitRepository = () => ({
  createExhibit: jest.fn(),
});
const mockGroupRepository = () => ({});

const mockExhibitor = new ExhibitorEntity();
mockExhibitor.id = 1;
mockExhibitor.studentNumber = 'ohs70001';
mockExhibitor.password = 'B19990101';
mockExhibitor.name = '山田太郎';
mockExhibitor.lastLoggedinAt = new Date();
mockExhibitor.createdAt = new Date();
mockExhibitor.updatedAt = new Date();

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
