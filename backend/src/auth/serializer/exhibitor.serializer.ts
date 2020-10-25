import { ApiProperty } from '@nestjs/swagger';
export class ExhibitorSerializer {
  @ApiProperty()
  id: string;

  @ApiProperty()
  studentNumebr: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  lastLoggedinAt: Date;
}
