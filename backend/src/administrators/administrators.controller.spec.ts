import { AdministratorsController } from './administrators.controller';
import { AdministratorsService } from './administrators.service';
import { AdministratorRepository } from '../entities/administrator.repository';

describe('AdministratorsController', () => {
  let administratorsController: AdministratorsController;
  let administratorsService: AdministratorsService;

  beforeEach(async () => {
    let administratorRepository: AdministratorRepository;

    administratorsService = new AdministratorsService(administratorRepository);
    administratorsController = new AdministratorsController(
      administratorsService,
    );
  });

  it('should be defined', () => {
    expect(administratorsController).toBeDefined();
  });
});
