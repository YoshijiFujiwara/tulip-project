import { ApiProperty } from '@nestjs/swagger';

export class EventSerializer {
  @ApiProperty()
  id: number;

  @ApiProperty()
  startAt: Date;

  @ApiProperty()
  endAt: Date;
}
