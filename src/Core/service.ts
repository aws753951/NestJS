import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
  getCore(): string {
    return 'Hello Core!';
  }
}
