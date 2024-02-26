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

