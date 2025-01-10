function greeter(person: string[]) {
  return "Hello, " + person.join(', ');
}

let user = ["Jane User"];

console.log(greeter(user)); // This will correctly handle the array input