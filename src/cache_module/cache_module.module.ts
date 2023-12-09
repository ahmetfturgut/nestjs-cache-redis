import { Module } from '@nestjs/common';
import type { RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';
import { CacheModuleService } from './cache_module.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
    imports: [
        CacheModule.register<RedisClientOptions>({
            store: redisStore,
            isGlobal: true,
            ttl: 0
            
        })
    ],
    exports: [CacheModuleService],
    providers: [CacheModuleService],
})
export class CustomCacheModule { }
