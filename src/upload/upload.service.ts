import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
  constructor() {}

  fileUpload(files: any) {
    if (!files) {
      throw new BadRequestException();
    }
    return files;
  }
}
