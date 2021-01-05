import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ExhibitorRepository } from '../entities/exhibitor.repository';
import { JwtService } from '@nestjs/jwt';
import { AdministratorRepository } from '../entities/administrator.repository';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(() => {
    let exhibitorRepository: ExhibitorRepository;
    let administratorRepository: AdministratorRepository;
    let jwtService: JwtService;

    authService = new AuthService(
      exhibitorRepository,
      administratorRepository,
      jwtService,
    );
    authController = new AuthController(authService);
  });

  it('should be defined', async () => {
    expect(authController).toBeDefined();
  });
});
