import { Test, TestingModule } from '@nestjs/testing';
import { EventsService } from './events.service';
import { EventRepository } from '../entities/event.repository';

const mockEventRepository = () => ({});

describe('EventsService', () => {
  let eventsService: EventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EventsService,
        { provide: EventRepository, useFactory: mockEventRepository },
      ],
    }).compile();

    eventsService = module.get<EventsService>(EventsService);
  });

  it('should be defined', () => {
    expect(eventsService).toBeDefined();
  });
});
