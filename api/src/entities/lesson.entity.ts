import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Module } from "./module.entity";

@Entity("lessons")
export class Lesson {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  created: Date;

  @Column()
  moduleId: string;

  @Column()
  date_lesson: Date;

  @ManyToOne((type) => Module, (module) => module.lesson, { onDelete: 'CASCADE' })
  module: Module;
}
