function parseCount(argument){
if (Number.isNaN(Number.parseFloat(argument))){
    throw new Error ("Невалидное значение");
}else{
    return Number.parseFloat(argument);
}
};


function validateCount(argument){
    try { 
      return parseCount(argument);
    } catch (error){
        return error;
    };
};

class Triangle {
    constructor(sideA, sideB, sideC) {
        if (sideA+sideB<=sideC||sideA>=sideB+sideC||sideB>=sideA+sideC){
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;

    };

    get perimeter(){
        return this.sideA+this.sideB+this.sideC;
    };

    get area(){
        let halfPerimeter = this.perimeter*0.5;
        return +Math.sqrt(halfPerimeter
            *(halfPerimeter-this.sideA)
            *(halfPerimeter-this.sideB)
            *(halfPerimeter-this.sideC)).toFixed(3);
    };
};

function getTriangle(a,b,c){
    try {return new Triangle (a,b,c);
    } catch (error) {
        return {
            get perimeter(){
                return "Ошибка! Треугольник не существует";
            },
            get area(){
                return "Ошибка! Треугольник не существует";
            }
        };
    };
};