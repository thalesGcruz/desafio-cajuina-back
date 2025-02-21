import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

export enum TaskStatus {
  PENDING   = "pending",
  COMPLETED = "completed",
  REMOVED   = "removed",
}

@Entity()
export class Task {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  text: string

  @Column({
     default: TaskStatus.PENDING, 
     enum:  TaskStatus
   })
   status: string

   @CreateDateColumn()
   creaatedAt: Date
 
   @UpdateDateColumn()
   updatedAt: Date

   @DeleteDateColumn()
   removedAt: Date
  

}
