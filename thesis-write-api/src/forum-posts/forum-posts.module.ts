import { Module } from '@nestjs/common';
import { ForumPostsService } from './forum-posts.service';
import { ForumPostsController } from './forum-posts.controller';
import { QueueModule } from 'src/nullogger/queues.module';

@Module({
  imports: [QueueModule],
  controllers: [ForumPostsController],
  providers: [ForumPostsService],
})
export class ForumPostsModule {}
