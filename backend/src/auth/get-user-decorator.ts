import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtPayload } from './interface/jwt-payload.interface';
import { AdministratorEntity } from '../entities/administrator.entity';
import { ExhibitorEntity } from '../entities/exhibitor.entity';
import { UserEntityType } from '../entities/type/user.type';

export const GetUser = createParamDecorator(
  (
    roles: JwtPayload['role'][] = ['student'],
    ctx: ExecutionContext,
  ): UserEntityType => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    let isStudent: boolean;
    let isAdmin: boolean;
    roles.forEach(role => {
      if (!isStudent) {
        isStudent = role === 'student' && user instanceof ExhibitorEntity;
      }
      if (!isAdmin) {
        isAdmin = role === 'admin' && user instanceof AdministratorEntity;
      }
    });

    if (isStudent || isAdmin) {
      return user;
    }
    throw new UnauthorizedException('このAPIを実行する権限がありません。');
  },
);
