export default function hello() {
    console.log('hello');
}

export function hello2() {
    console.log('hello2');
}

function hello3() {
    console.log('hello3');
}

export class Person {
    constructor(name) {
        this.name = name;
    }
}

export const LORUM = 'Lorum ipsum dolor sit et amet';

console.log('Hi module runs!');