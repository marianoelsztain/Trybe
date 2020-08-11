const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const allStudents = obj => {
  let studentSum = 0;

  for (let i = 0; i < Object.keys(obj).length; i += 1) {
    studentSum += obj[Object.keys(obj)[i]].numeroEstudantes;
  }
  return studentSum;
}

console.log(allStudents(allLessons));
