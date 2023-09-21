import { APP_GUARD } from "@nestjs/core";
import { JwtGuard } from "../guards";


export const authProviders = [
  {
    provide: APP_GUARD,
    useClass: JwtGuard,
  },

];