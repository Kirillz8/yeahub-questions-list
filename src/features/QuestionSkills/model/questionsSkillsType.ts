// export type questionsSkillsResponse = {
//   id: number;
//   title: string;
//   description: string;
//   createdAt: string;
//   updatedAt: string;
//   specializations: Skills[];
// };

// export type SkillsResponse = {
//   id: number;
//   title: string;
//   description: string;
//   imageSrc: string;
//   createdAt: string;
//   updatedAt: string;
// };

// export type SkillsResponse = {
//   id: number;
//   title: string;
//   description: string;
//   createdAt: string;
//   updatedAt: string;
//   specializations: Skills[];
// };
//
// export type Skills = {
//   id: number;
//   title: string;
//   description: string;
//   imageSrc: string;
//   createdAt: string;
//   updatedAt: string;
// };

export type Skills = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type SkillsResponse = {
  data: Skills[];
};
