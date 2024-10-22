import { Test, TestingModule } from '@nestjs/testing';
import { Less1Service } from './less1.service';

describe('Less1Service', () => {
  let service: Less1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Less1Service],
    }).compile();

    service = module.get<Less1Service>(Less1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
