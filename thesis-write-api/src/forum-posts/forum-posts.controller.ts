import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ForumPostsService } from './forum-posts.service';
import { CreateForumPostDto } from './dto/create-forum-post.dto';
import { UpdateForumPostDto } from './dto/update-forum-post.dto';

@Controller('forum-posts') 
export class ForumPostsController {
  constructor(private readonly forumPostsService: ForumPostsService) {}

  @Post()
  async create(@Body() createForumPostDto: CreateForumPostDto) {
    return await this.forumPostsService.create(createForumPostDto);
  }

  @Delete('/ban:postId')
  async ban(@Query('postId') id: number) {
    return await this.forumPostsService.ban(+id);
  }

  @Patch(':postId')
  async update(@Query('postId') id: number, @Body() updateForumPostDto: UpdateForumPostDto) {
    return await this.forumPostsService.update(+id, updateForumPostDto);
  }

  @Delete(':id')
  async remove(@Query('postId') id: number) {
    return await this.forumPostsService.remove(+id);
  }
}
