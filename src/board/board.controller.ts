import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
// import { Controller } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { DeleteArticleDto } from './dto/delete-article.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  // 게시물 목록을 가져오는 API
  @Get('/articles')
  async getArticles() {
    return this.boardService.getArticles();
  }

  // 게시물 상세보기 -> 게시물 ID로 확인
  @Get('/articles/:id')
  async getArticleById(@Param('id') articleId: number) {
    return this.boardService.getArticleById(articleId);
  }

  // 게시물 작성
  @Post('/articles')
  createArticle(@Body() data: CreateArticleDto) {
    return this.boardService.createArticle(
      data.title,
      data.content,
      data.password,
    );
  }

  // 게시물 수정
  @Put('/articles/:id')
  async updateArticle(
    @Param('id') articleId: number,
    @Body() data: UpdateArticleDto,
  ) {
    return this.boardService.updateArticle(
      articleId,
      data.title,
      data.content,
      data.password,
    );
  }

  // 게시물 삭제
  @Delete('/articles/:id')
  async deleteArticle(
    @Param('id') articleId: number,
    @Body() data: DeleteArticleDto,
  ) {
    return this.boardService.deleteArticle(articleId, data.password);
  }
}
