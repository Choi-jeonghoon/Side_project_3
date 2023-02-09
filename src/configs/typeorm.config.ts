import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/auth/auth.entity';
import { Board } from './../board.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '82880779',
  database: 'board-app',
  entities: [__dirname + '/../**/*.entity.{js,ts}', Board, User],
  synchronize: true,
};
