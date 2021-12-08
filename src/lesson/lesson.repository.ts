import { EntityRepository, Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { LessonInput } from './lesson.input';

@EntityRepository(Lesson)
export class LessonRepository extends Repository<Lesson> {
  async createLesson(lessonData: LessonInput): Promise<Lesson> {
    const lesson = this.create(lessonData);

    await this.save(lesson);

    return lesson;
  }
}
