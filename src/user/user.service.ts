import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { CacheModuleService } from 'src/cache_module/cache_module.service';

@Injectable()
export class UserService {
    constructor(private readonly cacheManeger: CacheModuleService) { }

    public async createUser(newUser: User): Promise<User> {

        let userString = await this.cacheManeger.getCache(`user:${newUser.id}`)

        if (userString) {
            let user = JSON.parse(userString)
            return user
        } else {
            const userString = JSON.stringify(newUser);
            await this.cacheManeger.setCache(`user:${newUser.id}`, userString);
            return newUser
        }

    }
}
