import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { GroupRepository } from '../entities/group.repository';

describe('GroupsController', () => {
  let groupsController: GroupsController;
  let groupsService: GroupsService;

  beforeEach(async () => {
    let groupRepository: GroupRepository;

    groupsService = new GroupsService(groupRepository);
    groupsController = new GroupsController(groupsService);
  });

  it('should be defined', () => {
    expect(groupsController).toBeDefined();
  });
});
