import { IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum ExhibitsOrderby {
  GOOD = 'good',
  VIEW = 'view',
}

export class GetExhibitsDto {
  @ApiProperty({
    enum: ExhibitsOrderby,
    required: false,
  })
  @IsOptional()
  @IsEnum(ExhibitsOrderby)
  orderBy?: ExhibitsOrderby;
}
