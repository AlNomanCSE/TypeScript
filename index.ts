let friends: (string | number | boolean)[] = ['al', 'Noman'];
console.log(friends.push(123));


const studen: {
    [ObjectKey: string]: string
}
    = {}

studen.name = "Nikmasn";
console.log(studen.name);


function hello(): void {
    console.log("hello");

}
hello();

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(12, 12));



let value: unknown = add(12, 13);
let valueINnumber: number = value as number;
console.log(valueINnumber.toString());

// enum
enum Days {
    monday, tuesday, wednesday, thuyrsday, friday, saturday, sunday
}

console.log(Days.monday);


// aliases
type xyz = string;
let address: xyz = 'khulna'
type mixed = string | number;
let password: (mixed) = 111231;
console.log(password.toFixed(3));

type order = {
    title: string;
    price: number;
    status: string
}
let Order_1: order = {
    title: "Mr.",
    price: 1234,
    status: "Merried"
}



// string literal
let userName: "Noman" | "Tanvir" | 'LOve';
userName = "LOve"
console.log(typeof userName);


function optionalPermeter(a: number, b: number, c?: boolean): number {
    return a + b;
}

console.log(optionalPermeter(100, -12, true));
