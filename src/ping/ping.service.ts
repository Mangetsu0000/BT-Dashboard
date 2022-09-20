import { Injectable } from '@nestjs/common';
import * as ping from 'ping';
@Injectable()
export class PingService {
  async ping(ipAddress: string): Promise<boolean> {
    const result = await ping.promise.probe(ipAddress, {
      timeout: 10,
      extra: ['-i', '2'],
    });
    result.alive
      ? console.log(`${ipAddress} is alive`)
      : console.log(`${ipAddress} is dead `);
    return result.alive;
  }
}
