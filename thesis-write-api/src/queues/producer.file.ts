import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import amqp, { ChannelWrapper } from 'amqp-connection-manager';
import { Channel } from 'amqplib';

@Injectable()
export class ProducerService {
  private channelWrapper: ChannelWrapper;
  constructor() {
    const connection = amqp.connect(['amqp://rabbitmq']);
    this.channelWrapper = connection.createChannel({
      setup: (channel: Channel) => {
      },
    });
  }

  async addToEmailQueue(data: any) {
    try {
      const message = {
        type: 0,
        target: "b12d0024-32e4-458a-87e7-39c3a2a9963a",
        data: {
          type: 1,
          data: data
        }
      };
  
      await this.channelWrapper.sendToQueue(
        'Logs',
        Buffer.from(JSON.stringify(message))
      );
      Logger.log('Sent To Queue');
    } catch (error) {
      throw new HttpException(
        'Error adding mail to queue',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
