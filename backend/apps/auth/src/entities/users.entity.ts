
import {
    Column,
    UpdateDateColumn,
    Entity,
    PrimaryColumn,
} from 'typeorm';

@Entity('users')
export class Users {
    @PrimaryColumn({ type: 'varchar' })
    id: string;
    @Column({ type: 'varchar' })
    username: string;
    @Column({ type: 'varchar', unique: true })
    email: string;
    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    updated_at: Date;
}