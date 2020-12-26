import { ExhibitsController } from './exhibits.controller';
import { ExhibitsService } from './exhibits.service';
import { ExhibitRepsitory } from '../entities/exhibit.repository';
import { GroupRepository } from '../entities/group.repository';
import { PresentationImageRepository } from '../entities/presentationImage.repository';

describe('ExhibitsController', () => {
  let exhibitsController: ExhibitsController;
  let exhibitsService: ExhibitsService;

  beforeEach(async () => {
    let exhibitRepsitory: ExhibitRepsitory;
    let groupRepository: GroupRepository;
    let presentationImageRepository: PresentationImageRepository;

    exhibitsService = new ExhibitsService(
      exhibitRepsitory,
      groupRepository,
      presentationImageRepository,
    );
    exhibitsController = new ExhibitsController(exhibitsService);
  });

  it('should be defined', () => {
    expect(exhibitsController).toBeDefined();
  });
});
