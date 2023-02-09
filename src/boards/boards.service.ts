import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from 'src/board.entity';
import { BoardRepository } from 'src/board.repositoty';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }
}
