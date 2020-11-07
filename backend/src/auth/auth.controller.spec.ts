import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ExhibitorRepository } from '../entities/exhibitor.repository';
import { JwtService } from '@nestjs/jwt';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(() => {
    let exhibitorRepository: ExhibitorRepository;
    let jwtService: JwtService;

    authService = new AuthService(exhibitorRepository, jwtService);
    authController = new AuthController(authService);
  });

  it('should be defined', async () => {
    expect(authController).toBeDefined();
  });
});
