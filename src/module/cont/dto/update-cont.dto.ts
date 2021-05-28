import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateContDto{

    @IsNumber()
    readonly age: number;

    @IsString()
    readonly gender: string;

    @IsString()
    readonly phone: string;

    @IsString({ each: true})
    @IsOptional()
    readonly interest: string[];
}