import { Injectable } from '@nestjs/common';

@Injectable()
export class userService {
  getUser(): string {
    return 'Hello User!';
  }
}
