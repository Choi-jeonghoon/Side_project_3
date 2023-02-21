import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/auth/auth.entity'; // 유저관련
import { Board } from './../boards/board.entity'; //게시판관련
import { ImageEntity } from 'src/img/image.entity'; //이미지 관련

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '82880779',
  database: 'board-app',
  entities: [__dirname + '/../**/*.entity.{js,ts}', Board, User, ImageEntity],
  synchronize: true,
};
