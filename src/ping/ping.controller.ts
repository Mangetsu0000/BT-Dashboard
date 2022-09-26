import { Controller, Get, Param } from '@nestjs/common';
import { PingService } from './ping.service';

@Controller('ping')
export class PingController {
  constructor(private pingService: PingService) {}
  @Get(':ip')
  pinger(@Param('ip') ipAddress: string) {
    return this.pingService.ping(ipAddress);
  }
}
