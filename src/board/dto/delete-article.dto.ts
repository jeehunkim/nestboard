// import { IsNumber } from 'class-validator';

// export class DeleteArticleDto {
//   @IsNumber()
//   readonly password: number;
// }

import { PickType } from '@nestjs/mapped-types';
import { CreateArticleDto } from './create-article.dto';

export class DeleteArticleDto extends PickType(CreateArticleDto, [
  'password',
] as const) {}
