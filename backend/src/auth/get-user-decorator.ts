import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtPayload } from './interface/jwt-payload.interface';
import { AdministratorEntity } from '../entities/administrator.entity';
import { ExhibitorEntity } from '../entities/exhibitor.entity';

export const GetUser = createParamDecorator(
  (
    role: JwtPayload['role'] = 'student',
    ctx: ExecutionContext,
  ): ExhibitorEntity | AdministratorEntity => {
    const request = ctx.switchToHttp().getRequest();

    const isStudent =
      role === 'student' && request.user instanceof ExhibitorEntity;
    const isAdmin =
      role === 'admin' && request.user instanceof AdministratorEntity;

    if (isStudent || isAdmin) {
      return request.user;
    } else {
      throw new UnauthorizedException('このAPIを実行する権限がありません。');
    }
  },
);
