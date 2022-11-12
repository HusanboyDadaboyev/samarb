
let chooseBtn = document.getElementById('choose');
console.log(chooseBtn);
let receiveBtn = document.getElementById('receive');
//console.log(receiveBtn);
let contactForm = document.getElementsByClassName('contactform_name') [0];
//console.log(contactForm[0]);
let text=document.getElementsByTagName('h2')[0];
//console.log(text[0]);
let modal = document.querySelector ('.modal'),
//console.log(modal),
closeBtn = document.querySelector('.close'), //x ni bosgandA YOQALADIGON QILISH PASTDA QO'SHIMCHASI BOR if make BACKGROUND DISSAPEAR WHEN X IS PRESSED MORE IS BELOW
message = document.getElementsByName('message')[0],
btn = document.querySelectorAll('main_tel_title')[0]//NOW EVERY BODY DO  THIS FROM STYLE USE NAMELY YANI HOZIR HAMMA SHU QUERRY SELEKTOR USLUBIDAN FOYDALANYAPTI  
console.log(btn);
// HODISALARNI QO'SHISH  MISHQA BORGANDA O'ZGARADIGON QILISH YO'LARI NAMELY ADDING EVENTS AND MAKING THEM VARIABLE AS THEY GO 
//FOR EXAMPLE MISOL UCHUN
function hover() {
    text.textContent = 'welcome to Husanboy`s site  namely yani Husanboyning Saytiga hush kelibsiz'
    
};
text.addEventListener('mouseenter',hover) // adn the other way below namely quyidagi esa yana bir yo'li
// text.addEventListener('mouseenter',function () {
   // text.textContent = 'welcome to Husanboy`s site  namely yani Husanboyning Saytiga hush kelibsiz'
//} ) 
// this is added to return to its previous state when you get the mouse namely yani bu avvalgi holiga qaytishi uchun  qo'shiladi mishkami olganingda 

text.addEventListener('mouseleave',function () {
    text.textContent = 'Все включена'
} );
receiveBtn.addEventListener('click',function () {
    modal.style.display = 'block'
});
closeBtn.addEventListener('click',function () { // agar X NI BOSilganida fon YO'Q QILISH UCHUN QOIMCHA if make BACKGROUND DISSAPEAR WHEN X IS PRESSED
    modal.style.display = 'none'
})
contactForm.addEventListener('input',function () {
    message.value = `my name is ${contactForm.value} wow i want`
})
