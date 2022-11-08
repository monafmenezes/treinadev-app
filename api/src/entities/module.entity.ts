import {
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Course } from "./course.entity";
import { Lesson } from "./lesson.entity";

@Entity("modules")
export class Module {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  created: Date;

  @ManyToOne((type) => Course, (course) => course.modules)
  course: Course;

  @OneToMany((type) => Lesson, (lesson) => lesson.modules, {
    eager: true,
  })
  lesson: Lesson[];
}
