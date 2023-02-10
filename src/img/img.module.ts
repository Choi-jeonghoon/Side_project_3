import { Module } from '@nestjs/common';
import { ImgController } from './img.controller';

@Module({
  controllers: [ImgController],
})
export class ImgModule {}
