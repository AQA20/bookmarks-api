import { Request } from 'express';
import { UserResponseDto } from 'src/auth/dto/user-response.dto';

export interface RequestWithUser extends Request {
  user: UserResponseDto;
}
