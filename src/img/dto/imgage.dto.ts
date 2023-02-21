import { IsNotEmpty } from 'class-validator';

export class ImageDto {
  @IsNotEmpty()
  hkey: string;

  @IsNotEmpty()
  kwamok: string;

  @IsNotEmpty()
  setNo: string;

  @IsNotEmpty()
  yymmwk: string;

  @IsNotEmpty()
  page: string;

  @IsNotEmpty()
  pageType: string;

  @IsNotEmpty()
  originalName: string;

  @IsNotEmpty()
  contents: string;

  @IsNotEmpty()
  photoYMD: string;

  @IsNotEmpty()
  sendDay: string;

  @IsNotEmpty()
  sendFlag: string;

  @IsNotEmpty()
  feedbackFlag: string;
}
