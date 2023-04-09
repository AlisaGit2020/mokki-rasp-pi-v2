import { Module } from '@nestjs/common';
import { InverterController } from './inverter/InverterController';
import { InverterService } from './inverter/InverterService';

@Module({
  imports: [],
  controllers: [InverterController],
  providers: [InverterService]
})
export class AppModule {}
