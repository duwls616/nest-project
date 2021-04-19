import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm/index';

@Entity('KYJ_USER')
export class User {
    @PrimaryGeneratedColumn()
    userSeq: number;

    @PrimaryColumn()
    userId: string;
    
    @Column({ length: 100})
    password : string;

    @Column({ length: 40})
    userNo : string;

    @Column({ length: 100})
    userName : string;
}