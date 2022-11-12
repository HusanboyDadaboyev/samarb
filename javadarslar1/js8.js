//today is topic closures
function calcFunction(number) {
    return function  () {
        console.log(1000 * number);
    }
}

const korcholon = calcFunction(8)
korcholon ()

//second
function husanboy(adi) {
    return function (o) {
      return  o * adi
    }
    
}

const alibobo = husanboy(21);
const bobur = husanboy (78);
console.log(alibobo(10));
console.log(bobur(70));
//threeth
//google.com netflix.com  twitter.com instagram.com 
//yandex.ru mail.ru
function alihon (domian){
return function (host) {
   return `https://${host}.${domian}` 
}
} 
const comUrl = alihon ('com')
 
console.log(comUrl('google'));
console.log(comUrl('twitter'));
console.log(comUrl('instagram'));

const ruTul = alihon ('ru')
console.log(ruTul('yandex'));
console.log(ruTul('mail'));
console.log(ruTul('ok'));
//four
function bind(context, fn) {
    return function (...args){
        fn.apply(context,args)
    }
}
function akulli () {
console.log(`
name: ${this.name},
age : ${this.age},
job : ${this.job}`,);
}
const laziz  = {
    name: 'Husanboy',
    age : 25,
    job :'full stack developer'
    
}
const abdukarimn = {
    name:'Abdurahmon',
    age : 26,
    job : 'taksi'
} 
bind (laziz,akulli)()
bind (abdukarimn,akulli)()