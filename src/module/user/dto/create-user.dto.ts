import { IsNumber, IsString } from "class-validator";

export class CreateUserDto{

    @IsString()
    readonly id: string;
    @IsString()
    readonly name: string;
    @IsNumber()
    readonly age: number;
    @IsString({each:true})
    readonly gender: string[];
}