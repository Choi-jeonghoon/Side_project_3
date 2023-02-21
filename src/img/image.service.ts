import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';
import { ImageEntity } from './image.entity';
import { ImageDto } from './dto/imgage.dto';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(ImageEntity)
    private readonly imageRepository: Repository<ImageEntity>,
  ) {}

  async imageUploadSave(imageDto: ImageDto): Promise<void> {
    const {
      hkey,
      kwamok,
      setNo,
      yymmwk,
      page,
      pageType,
      originalName,
      contents,
      photoYMD,
      sendDay,
      sendFlag,
      feedbackFlag,
    } = imageDto;
    const newImage: ImageEntity = new ImageEntity();
    newImage.hkey = hkey;
    newImage.kwamok = kwamok;
    newImage.setNo = setNo;
    newImage.yymmwk = yymmwk;
    newImage.page = page;
    newImage.pageType = pageType;
    newImage.originalName = originalName;
    newImage.contents = contents;
    newImage.photoYMD = photoYMD;
    newImage.sendDay = sendDay;
    newImage.sendFlag = sendFlag;
    newImage.feedbackFlag = feedbackFlag;
    const error = await validate(newImage);
    if (error.length > 0)
      throw new HttpException(
        { message: 'Image upload fail', error },
        HttpStatus.BAD_REQUEST,
      );
    else this.imageRepository.save(newImage);
  }
}
