import { ExhibitsController } from './exhibits.controller';
import { ExhibitsService } from './exhibits.service';
import { ExhibitRepsitory } from '../entities/exhibit.repository';
import { GroupRepository } from '../entities/group.repository';

describe('ExhibitsController', () => {
  let exhibitsController: ExhibitsController;
  let exhibitsService: ExhibitsService;

  beforeEach(async () => {
    let exhibitRepsitory: ExhibitRepsitory;
    let groupRepository: GroupRepository;

    exhibitsService = new ExhibitsService(exhibitRepsitory, groupRepository);
    exhibitsController = new ExhibitsController(exhibitsService);
  });

  it('should be defined', () => {
    expect(exhibitsController).toBeDefined();
  });
});
