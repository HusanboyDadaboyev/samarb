//first
//function sam() {
  //  console.log(this);
//}
//const persone = {
  //  name: 'Husanboy Dadaboyev',
    //age: 25,
    //job: 'full stack developer',
    //callContext: sam,
    //callAnotherContext: sam.bind(this),
    //callInfoJob: function () {
     //   console.group(`${this.name} info:`)
       // console.log(`Name is ${this.name}`);
       // console.log(`age is ${this.age}`);
       // console.log(`job is ${this.job}`);
       // console.groupEnd()


    //}
//}
//const Atilla = {
  //  name: 'Azizbek',
   // age: 36,
   /// job: 'bigginer developer',

//}
//persone.callInfoJob.bind(Atilla)()
//second
//function sam() {
  //  console.log(this);
//};
//const persone = {
 //   name: 'Husanboy Dadaboyev',
 //   age: 25,
 //   job: 'full stack developer',
 //   callContext: sam,
 //   callAnotherContext: sam.bind(this),
 //   callInfoJob: function (number) {
  //      console.group(`${this.name} info:`)
   //     console.log(`Name is ${this.name}`);
   //     console.log(`age is ${this.age}`);
    //    console.log(`contact is ${number}`);
    //    console.groupEnd()


  //  }
//};
//const Atilla = {
   // name: 'Azizbek',
   // age: 36,
  //  job: 'bigginer developer',

//};
//const fullinfo=persone.callInfoJob.bind(Atilla);
//fullinfo('998902116364')
//another way nameliy boshqa yo'li 
//const fullinfo=persone.callInfoJob.bind(Atilla,'998902116364') (); bu namber qo'shish yo'lari tepadagilardan farqi shu yerda
// endi navbat call with to epply
// function sam() {
//     console.log(this);
// };
// const persone = {
//     name: 'Husanboy Dadaboyev',
//     age: 25,
//     job: 'full stack developer',
//     callContext: sam,
//     callAnotherContext: sam.bind(this),
//     callInfoJob: function (number) {
//         console.group(`${this.name} info:`);
//         console.log(`Name is ${this.name}`);
//         console.log(`age is ${this.age}`);
//         console.log(`contact is ${number}`);
//         console.groupEnd()


//     }
// };
// const Atilla = {
//     name: 'Azizbek',
//     age: 36,
//     job: 'bigginer developer',

// };
// //persone.callInfoJob.apply(Atilla,['998902116364'])// applyda chaqirsen  [] esingdan chiqmasin bu siz functtion ishlamaydi
// persone.callInfoJob.call(Atilla,'998902116364')// call orcali chaqirsen esa [ qerakemas]
//fourth ways
//=======/ 
// const array = [10 , 20 ,40 ,50 ,70 ,90]
// function mult(array, number) {
//     return array.map(function (i) {
//   return i * number      
//     })
// }
// console.log(mult (array , 15))
//fiveth ways 

const array = [10 , 20 ,40 ,50 ,70 ,90]

Array.prototype.logger = function (number) {
 
    return this.map(function (i) {
        return i * number      
          })
}



console.log(array.logger(20))
