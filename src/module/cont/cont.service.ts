import { Injectable } from '@nestjs/common';
import { Cont } from './entities/cont.entity';

@Injectable()
export class ContService {
    private cont: Cont[] = [];

    getContList(): Cont[]{

        const user = [{
<<<<<<< HEAD:src/module/cont/cont.service.ts
            contId: 'C1324',
=======
            no: 156822,
>>>>>>> e3ad7f2a5d3bad9f98ac6dc19331d5a9ff966eb9:src/cont/cont.service.ts
            name: '최형철',
            comp: '하늘병원',
            age: 43,
            gender: '남자',
            job: '의사'
        },
        {
<<<<<<< HEAD:src/module/cont/cont.service.ts
            contId: 'C1324',
=======
            no: 22366,
>>>>>>> e3ad7f2a5d3bad9f98ac6dc19331d5a9ff966eb9:src/cont/cont.service.ts
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
