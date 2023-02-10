import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/configs/typeorm-ex.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([UserRepository])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
