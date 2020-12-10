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
    const user = ((role, user) => {
      switch (role) {
        case 'admin':
          return user instanceof AdministratorEntity ? user : null;
        case 'student':
          return user instanceof ExhibitorEntity ? user : null;
      }
    })(role, request.user as ExhibitorEntity | AdministratorEntity);
    if (!user) {
      throw new UnauthorizedException('このAPIを実行する権限がありません。');
    }
    return user;
  },
);
