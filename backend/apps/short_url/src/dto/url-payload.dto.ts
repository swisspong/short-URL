import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUrl, Length } from "class-validator";

export class UrlPayloadDto {
    @IsUrl()
    url: string;
}