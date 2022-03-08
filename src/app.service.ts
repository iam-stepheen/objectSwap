import { Injectable } from '@nestjs/common';
import { PayloadDtoResonse } from './dto/payload-response.dto';
import { PayloadDto } from './dto/payload.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async swapObject(payloadDto: PayloadDto): Promise<PayloadDtoResonse> {
    const swappedObject = swapObject(payloadDto.object);
    return {
      status: 'ok',
      data: swappedObject,
    };
  }
}

const swapObject = (object: object) => {
  var newObject = {};
  for (var key in object) {
    newObject[object[key]] = key;
  }
  return newObject;
};
