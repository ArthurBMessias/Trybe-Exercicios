class Student {
  registration: number;
  name: string;
  grades: [number, number, number, number];
  papersWork: [number, number];

  constructor(
    registration: number,
    name: string,
    grades: [number, number, number, number],
    papersWork: [number, number]
  ) {
    this.registration = registration;
    this.name = name;
    this.grades = grades;
    this.papersWork = papersWork;
  }

  sumGradesArray() {
    return this.grades.reduce((a, g) => {
      return a + g;
    }, 0);
  }

  averageGrades() {
    const sum = this.grades.reduce((a, g) => {
      return a + g;
    }, 0);
    const gradesLength = this.grades.length;

    const result = sum / gradesLength;

    return result;
  }
}
