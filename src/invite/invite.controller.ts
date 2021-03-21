import { Controller, Get } from '@nestjs/common';

@Controller('invite')
export class InviteController {

    @Get()
    getMain() : string {
        return "";
    }
}
