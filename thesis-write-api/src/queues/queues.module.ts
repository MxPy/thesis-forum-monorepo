import { Module } from '@nestjs/common';
import { ProducerService } from './producer.file';

@Module({
  providers: [ProducerService],
  exports: [ProducerService],
})
export class QueueModule {}
