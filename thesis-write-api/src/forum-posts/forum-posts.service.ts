import { Injectable } from '@nestjs/common';
import { CreateForumPostDto } from './dto/create-forum-post.dto';
import { UpdateForumPostDto } from './dto/update-forum-post.dto';
import { ProducerService } from "src/queues/producer.file";

@Injectable()
export class ForumPostsService {
  constructor(
    private producerService: ProducerService,
  ) {}
  async create(createForumPostDto: CreateForumPostDto) {
    await this.producerService.addToEmailQueue("test")
    return 'This action adds a new forumPost';
  }

  async findAll() {
    await this.producerService.addToEmailQueue("test")
    return `This action returns all forumPosts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} forumPost`;
  }

  update(id: number, updateForumPostDto: UpdateForumPostDto) {
    return `This action updates a #${id} forumPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} forumPost`;
  }
}
