class Student {

    marks = [5, 4, 4, 5];
    isDismissed = false;

    constructor(university, course, fullName) {

        this.university = university;
        this.course = course;
        this.fullName = fullName;

    }


    getInfo(university, course, fullName) {

        return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`;
    }


    get getMarks() {

        return this.isDismissed ? null : this.marks;
    }

    set addMarks(str) {

        const newMarks = str.split(',').map(Number);
        return this.marks.push(...newMarks);
    }

    getAverageMark() {

        return this.marks.reduce((acc, val) => acc + val, 0) / this.marks.length;;
    }

    dismiss() {
        this.isDismissed = true;
    }

    recover() {
        this.isDismissed = false;
    }

}

class BudgetStudent extends Student {

    bMarks = super.marks;
    IsDismissed = false;

    #scolarship = 1400;
    isSuccessful = this.getAverageMark() >= 4.0 && this.IsDismissed == false;



    constructor(university, course, fullName) {
        super(university, course, fullName);
        this.getScolarshipCountinualy();
    }


    getScolarship() {
        return console.log((this.isSuccessful) ? `Ви отримали ${this.#scolarship} степендії` : `Ви не отримали степендії`);
    }

    getScolarshipCountinualy() {

        let timeInterval = 3000;

        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                this.getScolarship();
            },
                timeInterval)

            timeInterval += 3000;
        }
    }
}

const student = new Student("ЛНУ", "3", "Софія Масляк");
const otherStudent = new Student("НУЛП", "2", "Соломія Андрусяк");

console.log(student.getInfo());

console.log(otherStudent.getMarks);

student.addMarks = '4,5,5';
console.log(student.getMarks);

console.log(student.getAverageMark().toFixed(2));

student.dismiss();
console.log(student.getMarks);

student.recover();
console.log(student.getMarks);

const budgetStudent = new BudgetStudent("НУЛП", "2", "Софія Андрусяк");

console.log(budgetStudent.getInfo());

console.log(budgetStudent.getMarks);

budgetStudent.dismiss();

console.log(budgetStudent.getMarks);

budgetStudent.recover();

console.log(budgetStudent.getMarks);



