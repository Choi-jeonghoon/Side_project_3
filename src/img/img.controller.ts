import { Body, Controller, Post } from '@nestjs/common';
import { ImageDto } from './dto/imgage.dto';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('/api/fileupload/studyteacher')
  async uploadTeacherFileUploadRequest(
    @Body() imageDto: ImageDto,
  ): Promise<void> {
    await this.imageService.imageUploadSave(imageDto);
  }
}
