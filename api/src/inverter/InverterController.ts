import { Controller, Get } from '@nestjs/common';
import { InverterService } from './InverterService';

@Controller()
export class InverterController {
  constructor(private readonly inverterService: InverterService) {}

  @Get('inverter/status/on')
  setOn(): string {
    this.inverterService.setOn();
    return 'on';
  }

  @Get('inverter/status/off')
  setOff(): string {
    this.inverterService.setOff();
    return 'off'
  }
}
