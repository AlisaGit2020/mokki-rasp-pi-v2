import { Injectable } from '@nestjs/common';
import { Gpio } from 'onoff';
import * as process from "process";

const pinNumber = 17;
@Injectable()
export class InverterService {
  private readonly gpio: Gpio

  constructor() {
    if (process.env.ENVIRONMENT == 'production') {
      this.gpio = new Gpio(pinNumber, 'out')
    }
  }

  setOn(): void  {
    this.writeGpio(1)
  }
  setOff():void {
    this.writeGpio(0)
  }

  private writeGpio(value: 1 | 0): void{
    if (process.env.ENVIRONMENT == 'production') {
      this.gpio.writeSync(value);
      this.gpio.unexport();
    }
  }
}
