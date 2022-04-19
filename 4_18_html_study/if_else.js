var grade;
var score = prompt("이재욱 님 점수를 입력하세요", 100);
score = parseInt(score);
if(score >= 90){
    grade = "A";
}
else if(score >= 80){
    grade = "B";
}
else if(score >= 70){
    grade = "C";
}
else if(score >= 60){
    grade = "D";
}
else{
    grade = "F";
}
document.write(score + "는" + grade + "입니다 <br>");
