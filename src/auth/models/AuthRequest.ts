import { Request } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';

export interface AuthRequest extends Request {
  user: User;
}
