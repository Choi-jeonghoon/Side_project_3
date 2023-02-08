import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './board.entity';

// @EntityRepository(Board)
// export class BoardRepository extends Repository<Board> {}

@Injectable()
export class BoardRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<Board>,
  ) {}
}
