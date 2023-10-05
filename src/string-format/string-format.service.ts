import { Injectable } from '@nestjs/common';

@Injectable()
export class StringFormatService {
  stringFormat(text: string) {
    return text.toUpperCase();
  }
}
