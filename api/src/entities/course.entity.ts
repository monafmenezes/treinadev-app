import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Module } from "./module.entity";

@Entity("courses")
export class Course {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  created: Date;

  @OneToMany((type) => Module, (module) => module.course, {
    eager: true,
  })
  modules: Module[]

}
