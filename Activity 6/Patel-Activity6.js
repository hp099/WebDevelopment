// initializing variables
let num;

// function takes in number grade and returns letter grade
function replaceGrades(numGrade){
    // assigning grade letter based on grade number entered
    if (numGrade > 99){
        return "A";
    }else if (numGrade > 79){
        return "B";
    }else if (numGrade > 69){
        return "C";
    }else if (numGrade > 59){
        return "D";
    }else if (numGrade >= 0){
        return "F";
    }
}

do{
    // prompts user for number grade and asks for input
    num = prompt("Enter number grade from 0 to 120 \nOr enter -1 to end entries");

    if (num <= 120 && num >= 0){ // validates input for only numbers between 0-120

        window.alert("Number grade = " + num + "\nLetter grade = " + replaceGrades(num));// displaying grade to user
    }

} while (num != -1);// entering -1 breaks the loop




