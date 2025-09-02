import { IsNotEmpty, IsString, Max, IsEmail, IsNumber } from "class-validator"

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;
}