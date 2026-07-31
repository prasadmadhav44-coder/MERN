console.log("Hello world!")

const person = ( name: string, age: number ): { name: string; age: number } => {
    return { name, age };
};
console.log(person("Alice", 25));

const add = ( a: number, b: number ): number => {
    return a + b;

}
console.log(add(5, 10));    