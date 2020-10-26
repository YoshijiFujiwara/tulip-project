import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ExhibitorRepository } from './exhibitor.repository';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(() => {
    let exhibitorRepository: ExhibitorRepository;

    authService = new AuthService(exhibitorRepository);
    authController = new AuthController(authService);
  });

  it('should be defined', async () => {
    expect(authController).toBeDefined();
  });
});
