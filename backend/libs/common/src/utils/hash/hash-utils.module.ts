import { Module } from "@nestjs/common";
import { HashUtilsService } from "./hash-utils.service";
// import { HashService } from "./hash-utils.service";

@Module({
    providers: [HashUtilsService],
    exports: [HashUtilsService],
})
export class HashUtilsModule { }