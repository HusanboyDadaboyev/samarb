//easy shows 1
//function myFirstFunction( ) {
  //  console.log('hi my name is Husanboy');
//}
//myFirstFunction () //tepadagi funcsia birinchi qismida tuzildi 2 qismida esa chaqirib consolga chiqarib olindi

//second shows easy
//function myFirstFunction(name ) {
  //  console.log(`Hi my name is  ${name}`);
//}
//myFirstFunction ('Husanboy')
//myFirstFunction ('Abdurahmon')
//myFirstFunction ('Sherzodbek')
// tepada birinchi funksiya tuzib oldi va mana 3 marta 5 mat 1000marta lab ishlatsek bolaveradi bu funksiyani
//three we have2 shows to function ,first name fuction declaretion ,name second expression
//this is first ways namely declaretion first calling fuction take ...
// bu birinchi yoli yani deqlareyshion birinchi funchsiyani chaqirib olib kegin funchsiya tuzish yoki funksiya tuzib kegin chaqrishish mumkin
//myFirstFunction ('Husanboy') 
//myFirstFunction ('Abdurahmon') 
//function myFirstFunction(name ) {
 // console.log(`Hi my name is  ${name}`);
//}
//function expression namely second ways 
// funksiya expreshion yani ikkinchi yo'l bun faqat funchsiya tuzgandan kegin chaqirsa boladi
//let myFunc = function () {
 //   console.log('this function is exreression');
//}
//myFunc()
//four  ways we have two different think first globalniy second vnutriny
// to'rtinchi yo'l bizda ikkixil tushuncha bor birinchisi glabalniy ikkinchisi vnutriniy
//birinchi let globalniy u qayerda num deb izlasen chiqaradi  funcsiani ikkidagi esa vnutriniy yani faqat funqsiyani ikkida ishlaydi funsiyani tashqarisiga chiqmaydi lekin tashqaridan olib kirishi mumkin
//let num = 5 
//function myFirstFunction(name ) {
  //  let num = 10
   // num++
   // console.log(num);
  //console.log(`Hi my name is  ${name}`);
//}
//myFirstFunction ('Husanboy') 
//console.log(num);
//experiment
//tajriba
function myFirstApp(name, age) {
    alert(`Hi my name is ${name} and i am full-stuck developer`)
    function showskills() {
        let skills = ['Html','css','javascript']
        for (let i = 0; i<skills.length; i++) {
alert(`you have skills ${skills[i]}`)
        }
    }
    showskills()
    // birinchhi ismini chiqarib beradi ikkinchi mana chaqiryapsan shoskiils deb seni html css va java scriptni billishini chiqarib beradi
    function checkage() {
        //damashniy zadaniya agar yoshi 18dan chiqiq bolsa damini ol 
        //agar yoshi kota bolsa hush keldin ukatoy deymiz foy learn it
        
    }
    function calcPow(num) {
        return num * num
        
    }
    console.log(calcPow(5));
    //bu yerda esa calcPowga 5 teng deb bir biriga ko'paytirishni buyuryapsan bu funsiya bajarilsa kiqadi
}

myFirstApp('samar',18)
//bu yerda esa ismini samar va yoshingni beryapsan
// hullas funsksiyani ichida funksiya

// bu return qaytarib ber degani bo'ladi log ichida qavus esingdan chiqmasin
//function ahu() {
   // return 'hi my name is Husanboy'
//}
//console.log(ahu());
