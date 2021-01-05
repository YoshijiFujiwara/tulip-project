import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { EventRepository } from '../entities/event.repository';

describe('EventsController', () => {
  let eventsController: EventsController;
  let eventsService: EventsService;

  beforeEach(async () => {
    let eventRepository: EventRepository;

    eventsService = new EventsService(eventRepository);
    eventsController = new EventsController(eventsService);
  });

  it('should be defined', () => {
    expect(eventsController).toBeDefined();
  });
});
