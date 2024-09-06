// object in js 
const person = {
    name: 'mahmudul',
    age: 23,
    profession: 'student',
    No: 'No status'
};

console.log(person.name); // Output: 'mahmudul'
//  dot notation 
const boyos =person.age
console.log(boyos)//Output:23

// bracket notation (property modde dash/gap thakle kaj korena)
console.log(person['age']) //normal way
const bura = person ['age'] 
console.log(bura) 


// another way 
let car ={
    accelerate: function(){
        console.log('car speed-up');
    }
}
car.accelerate();// output: car speed-up