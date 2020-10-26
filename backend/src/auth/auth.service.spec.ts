import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { ExhibitorRepository } from './exhibitor.repository';

const mockExhibitorRepository = () => ({
  validatePassword: jest.fn(),
});

describe('AuthService', () => {
  let authService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: ExhibitorRepository, useFactory: mockExhibitorRepository },
      ],
    }).compile();

    authService = await module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });
});
