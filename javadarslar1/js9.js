//first//
 const number = 8;
 console.log(localStorage.getItem('number')); // malumot olyapsan you are getting information
 localStorage.setItem('number',number.toString()) //malumot joylayapsanlocal storega you are posting infor,ation
//second//
const alixan = 8;
console.log(localStorage.getItem('alixan'));
localStorage.setItem('alixan',alixan.toString())
localStorage.removeItem ('alixan')//this will remove one data bu bir malumotni olib tashlaydi 
//localStorage.clear() //bu mahhaliy hotirani tozalab tashlaydi this will clear the local storage 
//third
const persone = {
    name:'husanboy',
    age :25
}
localStorage.setItem('persone',persone.toString())
const korcholon = JSON.stringify(persone)//convert from obgect to json obyeqtdan jsonga ogirip berYAPTI
console.log(' convert from obgect to json ',korcholon);
const husanboy = JSON.parse(korcholon) //convert from json to object  jsondan onyeqtga o'girip beryapti
console.log(' convert from json to object ',husanboy);
//fourth
const adi = {
    name :'husanboy',
    age : 25,
    job : 'furrniture maker and full stack developer'
}
localStorage.setItem('adi',JSON.stringify(adi)) //convert from obgect to json obyeqtdan jsonga ogirip berYAPTI faqat loval storeda

const abu = localStorage.getItem('adi')
console.log(JSON.parse(abu));
//fiveth
const alians = {
 name : 'husanboy',
AGE : 27,
JOB: 'furrniture maker and full stack developer'

}
localStorage.setItem('alians',JSON.stringify(alians))
const aliuns =localStorage.getItem('alians')
const abiuns =JSON.parse(aliuns)
abiuns.name ="korcholon" //we are renaming the data biz malumot nomini o'zgartiryapmiz  consoldagi
console.log(abiuns);
localStorage.setItem('updatedPerseon',JSON.stringify(abiuns))// we change the name inside the local memory biz mahalliy xotira ichidagi nomni o'zgartiramiz 