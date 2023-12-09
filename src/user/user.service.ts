import { Injectable } from '@nestjs/common';
import { User } from './user.model'; 
import { CacheModuleService } from '../cache_module/cache_module.service';

@Injectable()
export class UserService {
    constructor(private readonly cacheManager: CacheModuleService) { }

    public async createUser(newUser: User): Promise<User> {

        let userString = await this.cacheManager.getCache(`user:${newUser.id}`)

        if (userString) {
            let user = JSON.parse(userString)
            return user
        } else {
            const userString = JSON.stringify(newUser);
            await this.cacheManager.setCache(`user:${newUser.id}`, userString);
            return newUser
        }

    }

    public async getAllUser(): Promise<any> {
        const keys = await this.cacheManager.getAllCache()

        const allData: { [key: string]: any } = {};

        for (const key of keys) {
            let value = await this.cacheManager.getCache(key);
            allData[key] = JSON.parse(value);
        }

        return allData;
    }

    public async getUser(id: string): Promise<any> {

        let userString = await this.cacheManager.getCache(`user:${id}`)

        if (userString) {
            let user = JSON.parse(userString)
            return user
        } else {
            return "user not found"
        }

    }

    public async deleteUser(id: string): Promise<any> {
        return await this.cacheManager.deleteCache(`user:${id}`)
    }

    public async deleteAllUser(): Promise<any> {
        return await this.cacheManager.resetCache()
    }


}
