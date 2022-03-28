import {
  Entity,
  Column,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('hero')
@Index(['name'], { unique: true })
export class HeroEntity {
  @PrimaryGeneratedColumn('uuid')
  _id: string

  @Column('varchar', { length: 100, nullable: false })
  realName: string

  @Column('varchar', { length: 45, nullable: false })
  name: string

  @Column('int', { nullable: false })
  power: number

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date
}
