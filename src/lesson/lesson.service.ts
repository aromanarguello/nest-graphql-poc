import { LessonRepository } from './lesson.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { LessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonRepository)
    private lessonRepository: LessonRepository,
  ) {}

  async createLesson(lesson: LessonInput): Promise<Lesson> {
    return this.lessonRepository.createLesson(lesson);
  }

  async lessons(): Promise<Lesson[]> {
    return await this.lessonRepository.find();
  }
}
