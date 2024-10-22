import { Module } from '@nestjs/common';
import { Less1Controller } from './less1.controller';
import { Less1Service } from './less1.service';

@Module({
  controllers: [Less1Controller],
  providers: [Less1Service]
})
export class Less1Module {}
