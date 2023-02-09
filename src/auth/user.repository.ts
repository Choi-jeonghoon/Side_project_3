import { AuthCredentialDto } from 'src/auth/dto/Auth-Credential.Dto';
import { CustomRepository } from 'src/configs/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { User } from './auth.entity';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(authCredentialDto: AuthCredentialDto): Promise<void> {
    const { username, email, password } = authCredentialDto;

    const user = this.create({
      username,
      email,
      password,
    });
    await this.save(user);
  }
}
