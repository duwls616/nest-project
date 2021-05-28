import { Injectable } from '@nestjs/common';
import { Cont } from './entities/cont.entity';
import { UpdateContDto} from './dto/update-cont.dto';

@Injectable()
export class ContService {
    private cont: Cont[] = [];

    getContList(): Cont[]{

        // DB에서 가져오는부분 들어가야함
        const user = [{
            contId: 'C123',
            name: '최형철',
            comp: '하늘병원',
            age: 43,
            gender: '남자',
            job: '의사',
            phone: '',
        },
        {
            contId: 'C245',
            name: '김영희',
            comp: '가톨릭대병원',
            age: 52,
            gender: '여자',
            job: '의사',
            phone: '',
        }];

        this.cont = user;
        return this.cont;
    }

    updateCont(id:string, updateData: UpdateContDto){
        return updateData;
    }
}
