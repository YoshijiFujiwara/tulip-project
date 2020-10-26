import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ExhibitorRepository } from './exhibitor.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ExhibitorRepository])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
