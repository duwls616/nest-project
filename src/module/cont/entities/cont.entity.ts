import {Entity, Column, PrimaryGeneratedColumn, Index} from 'typeorm';

@Entity()
@Index(['contId'])
export class Cont {
    @PrimaryGeneratedColumn()
    contId: string;

    @Column({ length: 40, unique: true})
    name: string;

    @Column({ length: 40, unique: true})
    comp: string;

    @Column({ length: 40, unique: true})
    age: number;
    
    @Column({ length: 40, unique: true})
    gender: string;

    @Column({ length: 40, unique: true})
    job: string;

    @Column({ length: 40, unique: true})
    phone: string;
}