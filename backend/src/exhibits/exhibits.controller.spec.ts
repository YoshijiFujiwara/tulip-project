import { ExhibitsController } from './exhibits.controller';
import { ExhibitsService } from './exhibits.service';

describe('ExhibitsController', () => {
  let exhibitsController: ExhibitsController;
  let exhibitsService: ExhibitsService;

  beforeEach(async () => {
    exhibitsService = new ExhibitsService();
    exhibitsController = new ExhibitsController(exhibitsService);
  });

  it('should be defined', () => {
    expect(exhibitsController).toBeDefined();
  });
});
