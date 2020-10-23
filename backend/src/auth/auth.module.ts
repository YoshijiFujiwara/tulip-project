import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ExhibitorEntity } from './exhibitor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExhibitorEntity])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
