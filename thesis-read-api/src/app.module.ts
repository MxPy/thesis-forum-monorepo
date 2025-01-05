import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ForumPostsModule } from './forum-posts/forum-posts.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ForumPostsModule],
})
export class AppModule {}
