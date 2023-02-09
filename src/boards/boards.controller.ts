import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';
import { Board } from 'src/board.entity';
import { BoardsService } from './boards.service';

@Controller('/boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/:id')
  getBoardById(@Param('id') id: string): Promise<Board> {
    return this.boardsService.getBoardById(Number(id));
  }
}
