import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from "cache-manager";

@Injectable()
export class CacheModuleService {

    constructor(@Inject(CACHE_MANAGER) private readonly cacheService: Cache) { }

    public async setCache(key: string, value: string): Promise<string> {
        return await this.cacheService.set(key, value);
    }

    public async getCache(key: string): Promise<string> {
        return await this.cacheService.get(key);
    }

    public async deleteCache(key: string): Promise<void> {
        return await this.cacheService.del(key);
    }

    public async resetCache(): Promise<void> {0
        return await this.cacheService.reset();
    }
}
