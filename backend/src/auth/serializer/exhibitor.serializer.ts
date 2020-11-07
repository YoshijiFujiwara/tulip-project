import { ApiProperty } from '@nestjs/swagger';
export class ExhibitorSerializer {
  @ApiProperty()
  id: number;

  @ApiProperty()
  studentNumber: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  lastLoggedinAt: Date;

  @ApiProperty()
  groupId: number;
}
