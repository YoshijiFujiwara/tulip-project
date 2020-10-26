import { Injectable } from '@nestjs/common';
import { format } from 'date-fns';

@Injectable()
export class AppService {
  getHello(): string {
    // ライブラリ追加テスト用
    console.log(format(new Date(2017, 6, 6), 'MM/DD/YYYY'));
    return 'Hello World!';
  }
}
