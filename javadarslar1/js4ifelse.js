//let age = prompt ('how old are you') 
//if (age<18) {
//alert('you are small ')
//} else if ( age > 80 ) {
//alert ('you are late')
//} else {
  //  alert ('welcome to websied')
//}
//qech qoldingiz degani 2
//second way
let age = prompt ('how old are you') 
switch (age) {
    case  '18' :
   alert('you are 18')
   break
   case '50' :
    alert('you are 50')
    break
    default:
        alert('you are unsure')
}
// esing dan chiqmasin qoida bir userdan malumot kelganda doim stringda keladi shuning uchun switch data turi bilan tekshiradi shuning uchun doim switch bilan islasen '' qoyib yoz
//+prompt oldiga +qo'shen qelyatgan malumot number korinishida qabul qiladi shunda sen string qo'yishing shart emas