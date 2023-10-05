import { Module } from '@nestjs/common';
import { StringFormatService } from './string-format.service';

@Module({
  providers: [StringFormatService],
  exports: [StringFormatService],
})
export class StringFormatModule {}
