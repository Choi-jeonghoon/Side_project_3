import { Injectable } from '@nestjs/common';
import { BoardRepository } from 'src/board.repositoty';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}
}
