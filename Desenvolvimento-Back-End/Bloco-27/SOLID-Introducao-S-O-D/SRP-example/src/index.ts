// forma sem respeitar SOLID
// type Discipline = {
//     name: string;
//     grade: number;
//     letterGrade?: string;
//   };

//   type Student = {
//     name: string;
//     disciplines: Discipline[];
//   };

//   function setApproved(students: Array<Student>) {
//     const studentsWithLetterGrade = students.map((student) => {
//       const disciplinesWithLetterGrade = student.disciplines.map((discipline) => {
//         if (discipline.grade >= 0.9) discipline.letterGrade = 'A';
//         else if (discipline.grade >= 0.8) discipline.letterGrade = 'B';
//         else if (discipline.grade >= 0.7) discipline.letterGrade = 'C';
//         else if (discipline.grade >= 0.6) discipline.letterGrade = 'D';
//         else if (discipline.grade >= 0.1) discipline.letterGrade = 'E';
//         else discipline.letterGrade = 'F';

//         return discipline;
//       });

//       return {
//         name: student.name,
//         disciplines: disciplinesWithLetterGrade,
//       };
//     });

//     const approvedStudents = studentsWithLetterGrade.filter(({ disciplines }) =>
//       disciplines.every((discipline) => discipline.grade > 0.7));

//     /* Finja que o console.log é algo que atualiza uma base de dados */
//     approvedStudents.map(({ name, disciplines }) => {
//       console.log(`A pessoa com nome ${name} foi aprovada!`);
//       disciplines.map(({ name, letterGrade }) =>
//         console.log(`${name}: ${letterGrade}`));
//     });
//   }

type Discipline = {
  name: string;
  grade: number;
  letterGrade?: string;
};

type School = {
  name: string;
  approvalGrade: number;
};

type Student = {
  name: string;
  disciplines: Discipline[];
  school: School; // Agora não é mais uma string
};

/* Apoio para a função `getGradeLetter` */
const GRADE_DICT = {
  numbers: [0.9, 0.8, 0.7, 0.6, 0.1],
  letters: ['A', 'B', 'C', 'D', 'E'],
};

/* Função menor para remover o uso excessivo de `if{}else`s */
const getGradeLetter = (gradeNumber: number): string => {
  const gradeNumbers = GRADE_DICT.numbers;
  const gradeLetters = GRADE_DICT.letters;
  for (let i = 0; i < gradeNumbers.length; i += 1) {
    if (gradeNumber >= gradeNumbers[i]) return gradeLetters[i];
  }
  return 'F';
};

/* Coletar notas */
const getLetterGrades = (discipline: Discipline): Discipline => ({
  ...discipline,
  letterGrade: getGradeLetter(discipline.grade),
});

/* "Converter" */
const percentageGradesIntoLetters = (student: Student): Student => ({
  ...student,
  disciplines: student.disciplines.map(getLetterGrades),
});

/* "Determinar" */
// const approvedStudents = ({ disciplines }: Student): boolean =>
//   disciplines.every(({ grade }) => grade > 0.7);

// Determinar com base no OpenClosed Principle
const approvedStudents = ({ disciplines, school }: Student): boolean =>
  disciplines.every(({ grade }) => grade >= school.approvalGrade);

/* "Atualizar" */
const updateApprovalData = (student: Student): void => {
  console.log(`A pessoa com nome ${student.name} foi aprovada!`);

  student.disciplines.forEach(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

function setApproved(students: Student[]): void {
  students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

export {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
  getLetterGrades,
};

/* Abaixo temos um exemplo de execução */
const students = [
  {
    name: 'Lee',
    school: { name: 'Standard', approvalGrade: 0.7 },
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
  {
    name: 'Albus',
    school: { name: 'Hogwarts', approvalGrade: 0.8 },
    disciplines: [
      { name: 'divination', grade: 0.8 },
      { name: 'potions', grade: 0.9 },
    ],
  },
];

setApproved(students);
