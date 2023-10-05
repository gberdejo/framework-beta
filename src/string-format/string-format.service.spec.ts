import { Test, TestingModule } from '@nestjs/testing';
import { StringFormatService } from './string-format.service';

describe('StringFormatService', () => {
  let service: StringFormatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StringFormatService],
    }).compile();

    service = module.get<StringFormatService>(StringFormatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    const result = service.stringFormat('gabriel');

    expect(result).toEqual('GABRIEL');
    expect(result).toBe('GABRIEL');
  });
});
