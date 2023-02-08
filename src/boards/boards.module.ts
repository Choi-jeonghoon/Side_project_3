import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { Boards } from './boards';
import { BoardsService } from './boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from 'src/board.repositoty';

@Module({
  imports: [TypeOrmModule.forFeature([BoardRepository])],
  controllers: [BoardsController],
  providers: [Boards, BoardsService],
})
export class BoardsModule {}
