import { Module } from '@nestjs/common';
import { CacheModuleService } from './cache_module.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
    imports: [
        CacheModule.register({
            isGlobal: true,
            ttl: 0
        })
    ],
    exports: [CacheModuleService],
    providers: [CacheModuleService],
})
export class CustomCacheModule { }
