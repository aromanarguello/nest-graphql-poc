import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Lesson } from './lesson.entity';
import { LessonInput } from './lesson.input';
import { LessonService } from './lesson.service';

@Resolver(() => Lesson)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Mutation(() => Lesson)
  createLesson(@Args('lessonInput') lessonInput: LessonInput): Promise<Lesson> {
    return this.lessonService.createLesson(lessonInput);
  }

  @Query(() => Lesson)
  async lessons(): Promise<Lesson[]> {
    return this.lessonService.lessons();
  }
}
