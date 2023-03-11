export interface Subject {
  name: string;
  students: string[];
  score: number;
}

export const codementorRecord: Subject = {
  name: "Codementor",
  students: ["David", "Tim", "Tim"],
  score: 5,
};
export const records = [
  codementorRecord,
  {
    name: "Typescript",
    students: ["Tim"],
    score: 10,
  },
];
