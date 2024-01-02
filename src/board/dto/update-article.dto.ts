// import { IsNumber, IsString } from 'class-validator';

// export class UpdateArticleDto {
//   @IsString()
//   readonly title: string;

//   @IsString()
//   readonly content: string;

//   @IsNumber()
//   readonly password: number;
// }

import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleDto } from './create-article.dto';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {}
