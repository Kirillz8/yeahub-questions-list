export type QuestionSpecialization = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
};

export type SpecializationsResponse = {
  data: QuestionSpecialization[];
  page: number;
  limit: number;
  total: number;
};
