import { Injectable } from '@nestjs/common';
import { AuthCredentialDto } from './dto/Auth-Credential.Dto';
import { UserRepository } from './auth.repository';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async singUp(authCredentialDto: AuthCredentialDto): Promise<void> {
    return this.userRepository.createUser(authCredentialDto);
  }
}
