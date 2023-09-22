import {
    Column,
    UpdateDateColumn,
    Entity,
    PrimaryColumn,
    Index,
} from 'typeorm';

@Entity('urls')
@Index(['user_id', 'url'], { unique: true })
export class Urls {
    @PrimaryColumn({ type: 'varchar' })
    id: string;
    @Column({ type: 'varchar' })
    user_id: string;
    @Column({ type: 'varchar' })
    url: string;
    @Column({ type: 'varchar' })
    short_url: string;
    @Column({ type: 'int', default: 0 })
    click: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    updated_at: Date;
}