var students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
var themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
var marks = [4, 5, 5, 3, 4, 5];

var boys = ["Олександр", "Ігор", "Олексій"];
var girls = ["Олена", "Іра", "Світлана"];

  
function makePairs(array1, array2) {
    var pairs = [];
    for (var i = 0; i < array1.length; i++) {
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
    let boys = [students[0], students[1], students[4]];
    let girls = [students[2], students[3], students[5]];
    let pairs = makePairs(boys, girls);
    let concatenatedPairs = concatPairs(pairs);
    let pairsWithSubjects = makePairs(concatenatedPairs, themes);
    return pairsWithSubjects;
}


function getRandomMarks(length){
    var randomMarks = [];
    for (var i = 0; i < length; i++) {
        randomMarks.push(Math.floor(Math.random() * 6));
    }
    return randomMarks;
}

function getPairsWithRandomMarks(studentsWithSubjects, randomMarks){
 
    var result = [];
    for(var i = 0; i < studentsWithSubjects.length; i++){
        result[i] = [...studentsWithSubjects[i], randomMarks[i]]; 
        
    }
    return result;      
}

let pairs = makePairs(boys, girls);
console.log(pairs);

let pairsWithSubjects = getPairs(students, themes);
console.log(pairsWithSubjects);

let studentsWithMarks = makePairs(students, marks);
console.log(studentsWithMarks);

let randomMarks = getRandomMarks(marks.length);      
let pairsWithRandomMarks = getPairsWithRandomMarks(pairsWithSubjects, randomMarks);
console.log(pairsWithRandomMarks);
