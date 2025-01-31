import { Injectable } from '@nestjs/common';
import { CreateForumPostDto } from './dto/create-forum-post.dto';
import { UpdateForumPostDto } from './dto/update-forum-post.dto';
import { Nullogger } from "src/nullogger/producer.file";

@Injectable()
export class ForumPostsService {
  constructor(
    private producerService: Nullogger,
  ) {
  }
  @Nullogger.notifyAdmin()
  async create(createForumPostDto: CreateForumPostDto) {
    return {'detail': `This action adds a new forumPost ${createForumPostDto.userId}`};
  }

  async ban(id: number) {
    return `This action ban a #${id} forumPost`;
  }

  async update(id: number, updateForumPostDto: UpdateForumPostDto) {
    return `This action updates a #${id} forumPost`;
  }

  async remove(id: number) {
    return `This action removes a #${id} forumPost`;
  }

  
}
