import { Test, TestingModule } from '@nestjs/testing';
import { Less1Controller } from './less1.controller';

describe('Less1Controller', () => {
  let controller: Less1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Less1Controller],
    }).compile();

    controller = module.get<Less1Controller>(Less1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
