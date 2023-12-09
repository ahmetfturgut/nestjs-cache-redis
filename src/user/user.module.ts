import { Module } from '@nestjs/common';
import { CustomCacheModule } from 'src/cache_module/cache_module.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [
        CustomCacheModule
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule { }
