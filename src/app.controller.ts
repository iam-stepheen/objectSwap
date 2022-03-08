import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { PayloadDtoResonse } from './dto/payload-response.dto';
import { PayloadDto } from './dto/payload.dto';

@Controller()
@UsePipes(ValidationPipe)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/swapObject')
  async outfitBuyerSignup(
    @Body() payloadDto: PayloadDto,
  ): Promise<PayloadDtoResonse> {
    return this.appService.swapObject(payloadDto);
  }
}
