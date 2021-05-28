import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { ContService } from './cont.service';
import { Cont } from './entities/cont.entity';
import { UpdateContDto} from './dto/update-cont.dto';

@Controller('cont')
export class ContController {

    constructor(private readonly contService: ContService) {

    }

    @Get('list')
    getContList() : Cont[] {
       return this.contService.getContList();
    }

    @Patch('/:id')
    updateCont(@Param('id') contId: string, @Body() updateData: UpdateContDto) {
       return this.contService.updateCont(contId, updateData);
    }
}
