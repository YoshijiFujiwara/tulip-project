import { Test, TestingModule } from '@nestjs/testing';
import { GroupsService } from './groups.service';
import { GroupRepository } from '../entities/group.repository';

const mockGroupRepository = () => ({
  getGroups: jest.fn(),
});

describe('GroupsService', () => {
  let groupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GroupsService,
        { provide: GroupRepository, useFactory: mockGroupRepository },
      ],
    }).compile();

    groupsService = module.get<GroupsService>(GroupsService);
  });

  it('should be defined', () => {
    expect(groupsService).toBeDefined();
  });
});
