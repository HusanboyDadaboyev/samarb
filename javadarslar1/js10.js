//first
// class Car {
//     constructor(korcholon){
//         this.Name = korcholon.Name
//         this.speed = korcholon.speed
//         this.price = korcholon.price
//         this.model = korcholon.model 
//     }
//     year(){
//         console.log('2022 year');
//     }
// }


//  const BNW = new Car( {
//     Name:'BNW',
//     speed : '290km',
//     price : '570 000 $',
//     model : 'X7'
// });
//second
class Car {
    constructor(korcholon){
        this.Name = korcholon.Name
        this.speed = korcholon.speed
        this.price = korcholon.price
        this.model = korcholon.model 
    }
    year(){
        console.log('2022 year');
    }
}


 const BNW = new Car( {
    Name:'BNW',
    speed : '290km',
    price : '570 000 $',
    model : 'X7'
});

class Bas extends Car { //hozir bu bas ni yani lamborginini hozirgi class mizga ulab olyapmiz
   
}

const Lamborgine = new Bas( {
    Name:'Lambargine',
    speed : '320km',
    price : '970 000 $',
    model : 'Gallardo'
});


class Tar extends Car {
    constructor(korcholon) {   // bu yerda esa ogirlikni qoshyapmiz
        super(korcholon)     // bu yerda esa ogirlikni qoshyapmiz
        this.weight = korcholon.weight // bu yerda esa ogirlikni qoshyapmiz
    }
year () {
console.log('year 2020');
}
}

const buggati = new Tar( {
    Name:'buggati',
    speed : '430km',
    price : '7 000 000 $',
    model : 'buggati',
    weight : '7000 kg' 
});
//three

class Tup extends Car {
    constructor(korcholon) {   // bu yerda esa ogirlikni qoshyapmiz
        super(korcholon)     // bu yerda esa ogirlikni qoshyapmiz
        this.weight = korcholon.weight // bu yerda esa ogirlikni qoshyapmiz
    }
year () {
console.log('year 2020')
}
get pricechange() { // BU ASOSAN NARSANI PASTGA QOSHGANINGDA ISHLAYDI CONSTRUCTORNI PASTIDA TURADI CONSOLEDA
    return this.price * 3 //BU YERDA 3 KOPAYTIRYAPSAN PRICE BU ASOSIY NARHDA TURMAYDI CONSTRUTORNI TAGIDA ... BOLIP TURADI SHU YERGA BOSEN CHIQADI
}
}

const ferrari= new Tup( {
    Name:'Ferrari',
    speed : '320km',
    price : 970000,
    model : 'G7'
});
class Tep extends Car {
    constructor(korcholon) {   // bu yerda esa ogirlikni qoshyapmiz
        super(korcholon)     // bu yerda esa ogirlikni qoshyapmiz
        this.weight = korcholon.weight // bu yerda esa ogirlikni qoshyapmiz
    }
year () {
console.log('year 2020')
}

set speednew (newValue) {
this.speed = newValue // BUNI QONSOLEGA OTIB VALUE BERAVERSAN HYUNDAI.speed = 1000 SHUNDAY QILIB BESAN BOLAVERADI
}
}

const HYUNDAI= new Tep( {
    Name:'Ferrari',
    speed : '320km',
    price : 970000,
    model : 'G7'
});
//four qiziz tortburchaq va dumaloqlar chiqarisg ya tajriba
class birgallik {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }
    showElement(){
        this.$el.style.display = 'block'
}
 hideElement() {
this.$el.style.display = 'none'
}
}

class Square extends birgallik {
constructor(options){
    super(options.selector)
    this.$el.style.width = this.$el.style.height = options.size + 'px'
    this.$el.style.background = options.color
}

}
const square1 = new Square({
    selector:"#square1",
    size:100,
    color:'crimson'
})
const square2 = new Square({ //square2 hideElement () chaqirsen bu yo'q qilib beradi
     selector:"#square2",
    size:100,
    color:'green'
})
class Circle extends Square {
    constructor(options){
        super(options);
        this.$el.style.borderRadius = '50%'
    }
}
const circle1 = new Circle({
    selector:'#circle1',
    size:100,
    color:'black'
})
const circle12 = new Circle({
    selector:'#circle12',
    size:100,
    color:'yellow'
})