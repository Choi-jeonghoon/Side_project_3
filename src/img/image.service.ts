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

/* 위 코드는 NestJS에서 이미지 업로드 기능을 제공하는 서비스입니다. 이 서비스는 이미지 엔티티를 생성하고, 
데이터를 유효성 검사한 후 데이터베이스에 저장합니다.

 ImageService 클래스
 @Injectable() 데코레이터: NestJS에서 서비스를 인식하도록 하는 데코레이터입니다.
 constructor(): 이미지 엔티티를 주입 받아 imageRepository 프로퍼티에 저장합니다.
 imageUploadSave() 메서드: 이미지를 업로드하고 데이터베이스에 저장하는 기능을 제공합니다.
 imageDto 매개변수: 클라이언트에서 전송한 이미지 데이터를 담은 DTO 객체입니다.
 ImageEntity 클래스: 이미지 데이터를 담는 엔티티 클래스입니다.
 newImage 객체: 클라이언트에서 전송한 이미지 데이터를 담은 새로운 ImageEntity 객체를 생성합니다.
 validate() 함수: class-validator 라이브러리를 사용하여 newImage 객체의 데이터를 유효성 검사합니다. 유효성 검사를 위해 ImageEntity 클래스에서 사용한 class-validator 데코레이터들이 실행됩니다.
 HttpException 클래스: 예외를 던지기 위한 클래스입니다. 이 클래스를 사용하여 클라이언트에게 오류 메시지를 전송합니다.
 error 변수: validate() 함수에서 반환된 오류 메시지를 저장합니다.
 if 문: error 배열의 길이가 0보다 크면, 오류 메시지와 함께 BadRequest 예외를 던집니다. 그렇지 않으면, newImage 객체를 데이터베이스에 저장합니다.*/
