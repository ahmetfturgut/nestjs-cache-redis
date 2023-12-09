import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CacheModuleService } from '../cache_module/cache_module.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
//test
describe('AppController', () => {
    let userController: UserController;

    const mockCacheManager = {
        set: jest.fn(),
        get: jest.fn(),
        del: jest.fn(),
        reset: jest.fn(),
    };

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [
                UserService,
                CacheModuleService,
                {
                    provide: CACHE_MANAGER,
                    useValue: mockCacheManager,
                },],
        }).compile();

        userController = app.get<UserController>(UserController);
    });

    describe('root', () => {
        it('should return mockUserData createUser()', async () => {
            let mockUserData = {
                "id": "4",
                "name": "turgut",
                "password": "123"
            }
            const result = await userController.createUser(mockUserData);
            expect(result).toEqual(mockUserData);
        });
    });
});