import { LessonRepository } from './lesson.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';

@Module({
  imports: [TypeOrmModule.forFeature([LessonRepository])],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
