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

  @Column()
  courseId: string;

  @ManyToOne((type) => Course, (course) => course.modules, { onDelete: 'CASCADE' })
  course: Course;

  @OneToMany((type) => Lesson, (lesson) => lesson.module, {
    eager: true,
  })
  lesson: Lesson[];
}
