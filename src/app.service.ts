import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  private readonly logger = new Logger(AppService.name);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onModuleInit() {}
}
