// first way
for (let i = 1; i < 11; i++) {
    console.log(i);
    
}
// second way
let i = 0 ;
do {
console.log(i);
i++
}while (i  <10)

//third way 
let a = 0
while (a <10) {
    console.log(a);
    a++
  
    
}



let answers = []
let questions = [
    'what is your name',
    'what is your from',
    'how old are you',
    'what is your name',
    'what is your from',
    'how old are you'

]
for (let s = 0; s < questions.length; s++){
    answers[s] = prompt(questions[s])
}
console.log(answers);