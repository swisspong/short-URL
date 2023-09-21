
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class SignupLocalDto {
    @Transform(({ value }) => typeof value === "string" ? value?.trim() : value)
    @IsString()
    @IsNotEmpty()
    @Length(3)
    username: string;
    @IsEmail()
    email: string;
    @Transform(({ value }) => typeof value === "string" ? value?.trim() : value)
    @IsString()
    @IsNotEmpty()
    @Length(3)
    password: string;
}