 //Here we have assigned the value the user will enter in 'Marks variable'
let Marks = prompt("Enter marks") ;
//initialised the grade function
let Grade = 'A';

 //This is the block of God that has the control flow
if(Marks>79){
    Grade;
}else if (Marks>=60 && Marks<=79){
    Grade = 'B-'
}else if (Marks<=59 && Marks>49){
    Grade = 'C-'
}else if(Marks>=40 && Marks<49){
 Grade = 'D-'
} else if (Marks<40){
    Grade = 'E'
}
// displays the grade
alert("Your Grade is" + Grade)


