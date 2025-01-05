import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ForumPostsModule } from './forum-posts/forum-posts.module';

@Module({
  imports: [ForumPostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
