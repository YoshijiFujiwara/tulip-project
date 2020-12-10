import { ApiProperty } from '@nestjs/swagger';

export class AdministratorSerializer {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
