import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP" })
  creationDate: Date;

  @Column({ type: 'timestamptz', default: () => "CURRENT_TIMESTAMP" })
  lastUpdateDate: Date;
}