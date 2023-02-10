import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthCredentialDto {
  @IsString()
  @MinLength(1)
  @MaxLength(10)
  username: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(16)
  //영어,숫자,특수문자를 포함-유효성 검토
  @Matches(
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/,
    {
      message: 'Please include numbers, English and one special character',
    },
  )
  password: string;
}
