import type { QuestionSpecialization } from 'features/QuestionSpecializations';

export type QuestionSkill = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
};

export type Question = {
  id: string;
  title: string;
  description: string;
  code: string;
  imageSrc: string;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: string;
  complexity: number;
  rate: number;
  createdBy: string;
  updatedBy: string;
  questionSpecializations: QuestionSpecialization[];
  questionSkills: QuestionSkill[];
  createdAt: string;
  updatedAt: string;
  createdById?: string;
  updatedById?: string;
};

export type QuestionsResponse = {
  data: Question[];
  total: number;
  page: number;
  limit: number;
};

export type QuestionLong = {
  id: number;
  title: string;
  description: string;
  code: string;
  imageSrc: string;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: string;
  complexity: number;
  rate: number;

  createdById: string;
  updatedById: string;

  createdBy: {
    id: string;
    username: string;
  };

  updatedBy: {
    id: string;
    username: string;
  };

  questionSpecializations: QuestionSpecialization[];
  questionSkills: QuestionSkill[];

  createdAt: string;
  updatedAt: string;
};
