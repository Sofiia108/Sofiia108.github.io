const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const boys = ["Олександр", "Ігор", "Олексій"];
const girls = ["Олена", "Іра", "Світлана"];

  
function makePairs(array1, array2) {
    let pairs = [];
    for (let i = 0; i < array1.length; i++) {
        pairs.push([array1[i], array2[i]]);
    }
    return pairs;
}

function concatPairs(pairs) {
    let concatenatedPairs = [];

    for (let i = 0; i < pairs.length; i++)
        concatenatedPairs.push(`${pairs[i][0]} і ${pairs[i][1]}`);

    return concatenatedPairs
}


function getPairs(students, themes) {
    const boys = [students[0], students[1], students[4]];
    const girls = [students[2], students[3], students[5]];
    const pairs = makePairs(boys, girls);
    const concatenatedPairs = concatPairs(pairs);
    const pairsWithSubjects = makePairs(concatenatedPairs, themes);
    return pairsWithSubjects;
}


function getRandomMarks(length){
    let randomMarks = [];
    for (let i = 0; i < length; i++) {
        randomMarks.push(Math.floor(Math.random() * 6));
    }
    return randomMarks;
}

function getPairsWithRandomMarks(studentsWithSubjects, randomMarks){
 
    let result = [];
    for(let i = 0; i < studentsWithSubjects.length; i++){
        result[i] = [...studentsWithSubjects[i], randomMarks[i]]; 
    }
    return result;      
}

const pairs = makePairs(boys, girls);
console.log(pairs);

const pairsWithSubjects = getPairs(students, themes);
console.log(pairsWithSubjects);

const studentsWithMarks = makePairs(students, marks);
console.log(studentsWithMarks);

const randomMarks = getRandomMarks(marks.length);      
const pairsWithRandomMarks = getPairsWithRandomMarks(pairsWithSubjects, randomMarks);
console.log(pairsWithRandomMarks);
