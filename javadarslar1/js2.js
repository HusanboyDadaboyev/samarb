let age = 19 //data type numer before text name oldin text isme bu usulni
let myName ='abdulloh'//data type string ''before text name
let bool = false  //data type booling before text name
let number; //data-type=undefined namely yani malumot turi aniqlanmagan  error type is callled namely yani hatto typ deyiladi yani malumot turi aniqlanmagan 
console.log(number) //this is a continuation of the above namely yani bu tepadaning davomi
//console.log(a)//data-type null namely yani bunday malumot belgilanmagan
//object meaning of this word bu so'zning manosi obyeqt
let person = {
    fullname : 'samar',//string this is the method name strring you always  put a string bu usul nomi string har doim string bilan yozasan
    
    age : 19 ,//number this is the method name number no string will be set to this bu usul nomi string bunga hech qandar string qoyilmaydi
    isMarried : false,//booling 
};
console.log (person);
//array  meaning of this word bu so'zning manosi bir qator massiv
let arr = ['phone', 'mouse', 'soap']
//function  meaning of this word bu so'zning manosi funksiya
console.log(arr);//bu hamma sini chiqarib berdi 
console.log(arr[1]);// bu esa faqat birinchisini chiqarib breadi
arr[2]='desktop';//bu esa 2 chisini ozgartirib berdi
console.log(arr);//bu esa ozgargan holatini chiqarib beradi
let g = 3
let x=7
let y = 8
console.log(x+y);//bu qoshish funsyasi
console.log(x+980);//raqamga ham qo'shsa bo'ladi
console.log(x-y);//bu ayrish funcsiyasi
console.log(x*y);//bu esa kopaytirish
console.log(x/y);//bu esa bo'lish funsiyasi hisoblanadi

let z =15
console.log(z % 7);// bu esa qoldiqni yani chiqarib beradi 1 qoldiq qoladi bu holatda %
x = x+1
console.log(x);//shunday qo'shsa ham boladi faqat ununtma endi har safar x ning qiymati 1ga kopaydi 
y +=1
console.log(y);//shunday qoshsa ham boladi
g++
console.log(g);//bunda qo'shsaham boladi 1 qoshiladi
g--
console.log(g);// bu esa ayrish hisoblanadi
// java scriptda tengmi degan belgi == 
let a =10 
let b = 10 
console.log(10 == 10);// bu tengmi degani bitta barobar teng degan manoni anglatmaydi faqat 2 barobar anglatadi true chiqadi
console.log(a == b);// bu tengmi degani bitta barobar teng degan manoni anglatmaydi faqat 2 barobar anglatadi true chiqadi
console.log('10'==10);// bu tengmi degani bitta barobar teng degan manoni anglatmaydi faqat 2 barobar anglatadi true chiqadi bu daham ture chiqarib beraveradi chunqi raqamlar birhil
console.log('10'===10);// uchta barobar qandar data turi ekanliginiham tekshiradi shunung uchun false chhiqadi 
console.log(4/0); //buda esa infinity degan chiqadi namely cheksizlik 
console.log(4+'4');// bunda esa 44 chiqarib beradi chunki bittasi stringda 
//alert('hello user')//ekaranga chiqarib breadi bu savolni
//confirm('how  you old 18') bu ham shunday
let answer = confirm('how  you old 18') // bu esa javobni bizga false or ture holatida show
console.log(answer);//bu javobni beradi
//prompt ('what is your name')// bu ham savo beradi lekin input hoolatda va yozuv holatda oladi lekin bizga bermaydi
let messag = prompt ('what is your name') //bu javobni olib bizga beradi  
console.log(messag);// thi is you do know