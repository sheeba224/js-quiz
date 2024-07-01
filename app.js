alert("ans the following question");
let score = 0;
let totalquestion = 5;

let q1 = 'javascript follow BODMAS rule ?' ;
let ans1 = 'yes'
let q2 = 'how do you declear a variable in javascript?' ;
let ans2= 'yes'
let q3 ='have you passed js?' ;
let ans3 = 'yes'
let q4 = 'do you like js?' ;
let ans4 = 'yes'
let q5 = 'js programming language?' ;
let ans5 ='yes'

let respones1 = prompt (q1)
let respones2 = prompt (q2)
let respones3 = prompt (q3)
let respones4 = prompt (q4)
let respones5 = prompt (q5)

if (respones1 === ans1) {
    score++
}

if (respones2 === ans2) {
    score++
}

if (respones3 === ans3) {
    score++
}

if (respones4 === ans4) {
    score++
}

if (respones5 === ans5) {
    score++
}

alert(score/totalquestion*100)
