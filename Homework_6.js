var students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

function getSubjects(studentName) {
  const selectedStudent = students.filter(item => item.name === studentName);
  const subjects = selectedStudent[0].subjects;
  const subjectNames = Object.keys(subjects);
  const formatedNames = subjectNames.map(item =>  item.charAt(0).toUpperCase() + item.substr(1));
  const replacedUnderScore = formatedNames.map(item => item.replace('_', ' '))
  return replacedUnderScore;
}

const studentName = 'Tanya';
const subjects = getSubjects(studentName);

function getAverage(...numbers){
    const avarage = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
    return avarage;
}

function getAverageMark(studentName){
    const selectedStudent = students.filter(item => item.name === studentName);
    const subjects = selectedStudent[0].subjects;
    const marks = Object.values(subjects);
    let allMarks = [];
    for (var i = 0; i < marks.length; i++){
        allMarks = allMarks.concat(marks[i]);
     }
    const average = parseFloat(getAverage(...allMarks).toFixed(2));
    return average; 
}

const avarageMark = getAverageMark(studentName);

function getStudentInfo(studentName){
    const selectedStudent = students.filter(item => item.name === studentName);
    const averageMark = getAverageMark(studentName);
    const student = { course: selectedStudent[0].course, 
        name: selectedStudent[0].name, 
        averageMark: averageMark};
    const studentToString = JSON.stringify(student);
    return studentToString;
}

let studentInfo = getStudentInfo(studentName);

function getStudentsNames(students){
    const sortedStudents = students.sort((a, b) => a.name.localeCompare(b.name));
    const sortedNames = sortedStudents.map(item => item.name);
    return sortedNames;
}

const sortedNames = getStudentsNames(students);

function getBestStudent(students){
    let studentInfos = [];
    for (var i = 0; i < students.length; i++){
        studentInfos.push(JSON.parse(getStudentInfo(students[i].name)));
    }
    const sortedStudents = studentInfos.sort((a, b) => (a.averageMark > b.averageMark) ? 1 : -1);
    return sortedStudents.slice(-1)[0].name;
}

function calculateWordLetters(word){
    const result = [...word].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
    return JSON.stringify(result);
}

const bestStudent = getBestStudent(students);

const word = "test";

const lettersInWord = calculateWordLetters(word);

console.log(`Функція 1: ${subjects}
Функція 2: ${avarageMark}
Функція 3: ${studentInfo}
Функція 4: ${sortedNames}
Функція 5: ${bestStudent}
Функція 6: ${lettersInWord}`);







