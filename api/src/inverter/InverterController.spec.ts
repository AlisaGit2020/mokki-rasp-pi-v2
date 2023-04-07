import { Test, TestingModule } from '@nestjs/testing';
import { InverterController } from './InverterController';
import { InverterService } from './InverterService';

describe('InverterController', () => {
  let inverterController: InverterController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [InverterController],
      providers: [InverterService],
    }).compile();

    inverterController = app.get<InverterController>(InverterController);
  });

  describe('root', () => {
    it('should set inverter on"', () => {
      expect(inverterController.setOn()).toBe('on');
    });

    it('should set inverter off"', () => {
      expect(inverterController.setOff()).toBe('off');
    });
  });
});
