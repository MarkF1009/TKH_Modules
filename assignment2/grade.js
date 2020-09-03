var fail = " Yor grade is F, study to do better. "

var grade = parseInt(prompt(" Please Enter your number grade to know the letter grade:"));

switch (true) 

{
    case (grade >= 91):
        console.log("You have a A+");
    break;    

    case (grade > 88 && grade <= 90):
        console.log("you have a A:");
    break; 

    case (grade > 84 && grade <= 88):
        console.log("You got a B+:");
    break;  

    case (grade > 76 && grade <= 84):
        console.log("You got a C+:");
    break;    

    case (grade > 70 && grade <= 76):
        console.log("You got a  C:");
    break;

    case (grade > 67 && grade <= 70):
        console.log("You got a D+:");
    break;

    case (grade > 64 && grade <= 67):
        console.log("You got a D:");
    break;

    default:
        console.log(fail);


}