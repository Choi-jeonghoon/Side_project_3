import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';
import { CustomRepository } from './configs/typeorm-ex.decorator';
import { CreateBoardDto } from './boards/dto/create-board.dto';
import { BoardStatus } from './boards/board-status.enum';

// @EntityRepository(Board)
// export class BoardRepository extends Repository<Board> {}

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });
    await this.save(board);
    return board;
  }
}
