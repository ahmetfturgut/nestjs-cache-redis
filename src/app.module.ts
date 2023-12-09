import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomCacheModule } from './cache_module/cache_module.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // CustomCacheModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
