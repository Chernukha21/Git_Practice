let str = "some";
let strObj = new String(str);

console.dir([1,2,4]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hello World');
    }
};

const john = Object.create(soldier);
console.log(john.sayHello());
