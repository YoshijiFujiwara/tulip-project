import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { ExhibitorRepository } from './exhibitor.repository';
import { JwtService } from '@nestjs/jwt';

const mockExhibitorRepository = () => ({
  validatePassword: jest.fn(),
});
const mockJwtService = () => ({
  signAsync: jest.fn(),
  verifyAsync: jest.fn(),
});

describe('AuthService', () => {
  let authService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: ExhibitorRepository, useFactory: mockExhibitorRepository },
        { provide: JwtService, useFactory: mockJwtService },
      ],
    }).compile();

    authService = await module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });
});
