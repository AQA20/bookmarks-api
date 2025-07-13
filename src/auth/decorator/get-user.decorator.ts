import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { RequestWithUser } from 'src/common/interfaces/request-with-user.interface';
import { UserResponseDto } from '../dto/user-response.dto';

export const GetUser = createParamDecorator(
  (data: keyof UserResponseDto | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>();
    if (data) {
      return request.user[data];
    }
    return request.user;
  },
);
