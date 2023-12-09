import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserRequestDto } from './dto/user.request.dto';
import { UserResponseDto } from './dto/user.response.dto';
import { User } from './user.model';

@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post("createUser")
    async createUser(@Body() request: CreateUserRequestDto): Promise<UserResponseDto> {
        let newUser = new User();

        newUser.id = request.id;
        newUser.name = request.name;
        newUser.password = request.password;

        newUser = await this.userService.createUser(newUser);

        return newUser;

    }

    @Get()
    async getAllUser(): Promise<any> {
        return await this.userService.getAllUser();
    }

    @Get(':id')
    async getUser(@Param("id") id: string): Promise<UserResponseDto> {

        let user = await this.userService.getUser(id);
        console.log(user);
        return user;

    }

    @Delete(':id')
    async deleteUser(@Param("id") id: string): Promise<UserResponseDto> {

        let user = await this.userService.deleteUser(id);
        console.log(user);
        return user;
    }

    @Get("deleteAllUser")
    async deleteAllUser(): Promise<any> {
        return await this.userService.deleteAllUser();
    }

}
