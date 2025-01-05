import { Module } from '@nestjs/common';
import { Nullogger } from './producer.file';

@Module({
  providers: [Nullogger],
  exports: [Nullogger],
})
export class QueueModule {}
