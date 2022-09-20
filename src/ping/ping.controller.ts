import { Controller, Get } from '@nestjs/common';
import { PingService } from './ping.service';

@Controller('ping')
export class PingController {
  constructor(private pingService: PingService) {}
  @Get()
  pinger() {
    return this.pingService.ping('xxx.xxx.x.xx');
  }
}
