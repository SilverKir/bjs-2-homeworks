// class Marks {
//     constructor(subject){
//         this.subject=subject;
//         this.subMarks=[];
//     };
// };

class Student{
constructor(name, gender, age) {
    this.name=name;
    this.gender=gender;
    this.age=age;
    this.marks={};
};

addMark(mark,subject){
    if (2<=mark && mark<=5) {
        if (this.marks[subject]===undefined){
            this.marks[subject]=[mark];
        } else {
        this.marks[subject].push(mark);
        };
    };   
};

getAverageBySubject(subject){
    return this.marks[subject]===undefined 
    ? 0 
    : this.marks[subject].reduce((acc, mark, indx, arr)=>{return acc+mark/arr.length},0)
};

getAverage(){
    return Object.keys(this.marks)
    .reduce((acc, subject, indx, arr)=>{return acc+this.getAverageBySubject(subject)/arr.length},0)
};

};  


