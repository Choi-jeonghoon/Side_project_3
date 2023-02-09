import { CreateUserDto } from 'src/boards/dto/create-User.Dto';
import { CustomRepository } from 'src/configs/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { User } from './auth.entity';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  async createBoard(createUserDto: CreateUserDto): Promise<User> {
    const { id, username, password } = createUserDto;

    const user = this.create({
      id,
      username,
      password,
    });
    await this.save(user);
    return user;
  }
}
