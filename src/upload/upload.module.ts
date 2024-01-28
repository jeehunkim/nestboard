import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { multerOptionsFactory } from './multer-options.factory';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';

import { MulterConfigService } from './multer-options.factory.dash';

@Module({
  imports: [
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useClass: MulterConfigService,
      inject: [ConfigService],
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}

// useFactory: multerOptionsFactory,
