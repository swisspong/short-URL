import { OmitType } from "@nestjs/mapped-types";
import { SignupLocalDto } from "./signup-local.dto";

export class SigninLocalDto extends OmitType(SignupLocalDto, ['username'] as const) {}