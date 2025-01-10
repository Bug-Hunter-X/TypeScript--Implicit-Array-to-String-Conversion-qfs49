function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane User"];

console.log(greeter(user)); // This will not cause a compilation error but will produce unexpected results at runtime