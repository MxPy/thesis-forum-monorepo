import { Injectable } from '@nestjs/common';
import { CreateForumPostDto } from './dto/create-forum-post.dto';
import { UpdateForumPostDto } from './dto/update-forum-post.dto';

@Injectable()
export class ForumPostsService {

  findAll() {
    return `This action returns all forumPosts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} forumPost`;
  }
}
