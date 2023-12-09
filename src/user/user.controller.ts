import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserRequestDto } from './dto/user.request.dto';
import { CreateUserResponseDto } from './dto/user.response.dto';
import { User } from './user.model';

@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post("createUser")
    async createUser(@Body() request: CreateUserRequestDto): Promise<CreateUserResponseDto> {
        let newUser = new User();

        newUser.id = request.id;
        newUser.name = request.name;
        newUser.password = request.password;

        newUser = await this.userService.createUser(newUser);

        return newUser;

    }
}
