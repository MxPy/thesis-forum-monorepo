import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import amqp, { ChannelWrapper } from 'amqp-connection-manager';
import { Channel } from 'amqplib';


@Injectable()
export class Nullogger {
  public channelWrapper: ChannelWrapper;
  constructor() {
    const connection = amqp.connect(['amqp://rabbitmq']);
    this.channelWrapper = connection.createChannel({
      setup: (channel: Channel) => {
      },
    });
  }


  static notifyAdmin() {
    return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor,
    ) {
      const originalMethod = descriptor.value;

      descriptor.value = async function (...args: any[]) {
        const result = await originalMethod.apply(this, args);
        
        try {
          const producerService: Nullogger = this.producerService;
          const argsString = JSON.stringify(args);
          const message = {
            type: 0,
            target: "b12d0024-32e4-458a-87e7-39c3a2a9963a",
            data: {
              type: 1,
              data: `Method: ${propertyKey}, Arguments: ${argsString}`,
            }
          };
      
          await producerService.channelWrapper.sendToQueue(
            'Logs',
            Buffer.from(JSON.stringify(message))
          );
          Logger.log(
            `Notification sent to subscriber after executing ${propertyKey}`,
          );
        } catch (error) {
          Logger.error(
            `Failed to notify subscriber after executing ${propertyKey}`,
            error,
          );
        }

        return result;
      };

      return descriptor;
    };
  }
}

