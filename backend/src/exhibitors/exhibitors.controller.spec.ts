import { ExhibitorsController } from './exhibitors.controller';
import { ExhibitorsService } from './exhibitors.service';
import { ExhibitorRepository } from '../entities/exhibitor.repository';

describe('ExhibitorsController', () => {
  let exhibitorsController: ExhibitorsController;
  let exhibitorsService: ExhibitorsService;

  beforeEach(async () => {
    let exhibitorRepository: ExhibitorRepository;

    exhibitorsService = new ExhibitorsService(exhibitorRepository);
    exhibitorsController = new ExhibitorsController(exhibitorsService);
  });

  it('should be defined', () => {
    expect(exhibitorsController).toBeDefined();
  });
});
