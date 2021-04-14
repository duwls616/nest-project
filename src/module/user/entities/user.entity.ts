
import {Entity, Column, PrimaryGeneratedColumn, Index} from 'typeorm';

@Entity('KYJ_USER')
@Index(['userId'])
export class User {
    @PrimaryGeneratedColumn()
    userSeq: number;

    @Column({ length: 40, unique: true})
    userId: string;
    
    @Column({ length: 100})
    password : string;

    @Column({ length: 40})
    userNo : string;

    @Column({ length: 100})
    userName : string;
}