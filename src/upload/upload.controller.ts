import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'video', maxCount: 1 },
      { name: 'image', maxCount: 2 },
    ]),
  )
  async upload(@UploadedFiles() files: Express.MulterS3.File[]) {
    const { video, image } = JSON.parse(JSON.stringify(files));

    const uploadFiles = {
      video,
      image,
    };

    return this.uploadService.fileUpload(uploadFiles);
  }
}
