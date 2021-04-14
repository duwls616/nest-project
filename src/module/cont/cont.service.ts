import { Injectable } from '@nestjs/common';
import { Cont } from './entities/cont.entity';

@Injectable()
export class ContService {
    private cont: Cont[] = [];

    getContList(): Cont[]{

        const user = [{
            contId: 'C1324',
            name: '최형철',
            comp: '하늘병원',
            age: 43,
            gender: '남자',
            job: '의사'
        },
        {
            contId: 'C1324',
            name: '김영희',
            comp: '가톨릭대병원',
            age: 52,
            gender: '여자',
            job: '의사'
        }];

        this.cont = user;
        return this.cont;
    }
}
