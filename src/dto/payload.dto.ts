import { IsNotEmpty, IsObject } from 'class-validator';

export class PayloadDto {
  @IsNotEmpty()
  @IsObject()
  object: object;
}
