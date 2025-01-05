import { IsArray, IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateForumPostDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  tag: string[];

  @IsOptional()
  @IsString()
  imageLink?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
