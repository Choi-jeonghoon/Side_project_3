import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { BoardStatus } from '../board-status.enum';

// 커스텀pipe 기본적인 사항
// export class BoardStatusValidationPipe implements PipeTransform {
//   transform(value: any, metadata: ArgumentMetadata) {
//     console.log('value', value);
//     console.log('metadata', metadata);

//     return value;
//   }
// }

export class BoardStatusValidationPipe implements PipeTransform {
  private isStatisValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
  readonly StatusOptions = [BoardStatus.PUBLIC, BoardStatus.PRIVATE];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatisValid(value)) {
      throw new BadRequestException(`${value} is not in the status options`);
    }
    return value;
  }
}
/*
위 코드는 NestJS의 파이프 기능을 사용하여 게시판 상태 값을 검증하는 기능을 제공하는 클래스입니다.

BoardStatusValidationPipe 클래스
PipeTransform 인터페이스: 파이프를 만들 때 구현해야하는 인터페이스입니다.
isStatisValid() 메서드: 입력된 status 값이 StatusOptions 배열 안에 존재하는지 검증하는 메서드입니다.
StatusOptions 배열: 게시판의 상태 옵션을 저장하는 배열입니다. PUBLIC과 PRIVATE 상태를 갖습니다.
transform() 메서드: 파이프의 입력값을 처리하는 메서드입니다. 이 메서드는 입력값을 대문자로 변환하고, isStatisValid() 메서드를 사용하여 유효성을 검증합니다.
value 매개변수: 파이프의 입력값입니다.
toUpperCase() 메서드: 입력값을 대문자로 변환합니다.
if 문: isStatisValid() 메서드에서 유효성 검증에 실패하면, BadRequestException 예외를 던집니다. 그렇지 않으면, 대문자로 변환한 입력값을 반환합니다.
*/
