import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './img.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageEntity } from './image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ImageEntity])],
  providers: [ImageService],
  controllers: [ImageController],
})
export class ImageModule {}
