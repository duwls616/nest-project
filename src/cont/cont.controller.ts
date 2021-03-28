import { Controller, Get } from '@nestjs/common';
import { ContService } from './cont.service';
import { Cont } from './entities/cont.entity';

@Controller('cont')
export class ContController {

    constructor(private readonly contService: ContService) {

    }

    @Get('list')
    getContList() : Cont[] {
       return this.contService.getContList();
    }
}
