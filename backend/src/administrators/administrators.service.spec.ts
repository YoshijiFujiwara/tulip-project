import { Test, TestingModule } from '@nestjs/testing';
import { AdministratorsService } from './administrators.service';
import { AdministratorRepository } from '../entities/administrator.repository';

const mockAdministratorRepository = () => ({});

describe('AdministratorsService', () => {
  let administratorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdministratorsService,
        {
          provide: AdministratorRepository,
          useFactory: mockAdministratorRepository,
        },
      ],
    }).compile();

    administratorsService = module.get<AdministratorsService>(
      AdministratorsService,
    );
  });

  it('should be defined', () => {
    expect(administratorsService).toBeDefined();
  });
});
