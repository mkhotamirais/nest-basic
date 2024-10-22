import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Less1Service } from './less1.service';
import { Less1 } from './Less1Db';

@Controller('less1')
export class Less1Controller {
  constructor(private readonly less1Service: Less1Service) {}

  @Get()
  getLess1s(): Less1[] {
    return this.less1Service.getLess1s();
  }

  @Get(':id')
  getLess1ById(@Param('id') id: number): Less1 {
    // +id itu (unary) bisa juga dengan parseInt
    return this.less1Service.getLess1ById(+id);
  }

  @Post()
  createLess1(@Body() less1: Less1): { message: string; data: Less1 } {
    return this.less1Service.createLess1(less1);
  }

  @Put(':id')
  updateLess1(
    @Param('id') id: number,
    @Body() less1: Less1,
  ): { message: string; data: Less1 } {
    return this.less1Service.updateLess1(+id, less1);
  }

  @Delete(':id')
  deleteLess1(@Param('id') id: number): { message: string } {
    return this.less1Service.deleteLess1(+id);
  }
}
