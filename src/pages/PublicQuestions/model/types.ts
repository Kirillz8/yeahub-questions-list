export type QuestionSpecialization = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
};

export type QuestionSkill = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
};

export type Question = {
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
  createdBy: string;
  updatedBy: string;
  questionSpecializations: QuestionSpecialization[];
  questionSkills: QuestionSkill[];
  createdAt: string;
  updatedAt: string;
};

export type QuestionsResponse = {
  data: Question[];
  total: number;
  page: number;
  limit: number;
};
