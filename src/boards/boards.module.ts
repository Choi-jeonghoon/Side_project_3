import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { Boards } from './boards';
import { BoardsService } from './boards.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from 'src/board.repositoty';
import { TypeOrmExModule } from 'src/configs/typeorm-ex.module';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([BoardRepository])],
  controllers: [BoardsController],
  providers: [Boards, BoardsService],
})
export class BoardsModule {}
