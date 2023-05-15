interface Person {
    name: string;
    age: number;
    email?: string;
  }
  
  function GetPersonInfo(person: Person) {
    const { name, age, email } = person;
    console.log(`Name: ${name}, Age: ${age}`);
    if (email) {
      console.log(`Email: ${email}`);
    }
  }
  
  const person1 = { name: "Moussa", age: 25 };
  const person2 = { name: "John", age: 35, email: "Johm@example.com" };
  
  GetPersonInfo(person1); 
  GetPersonInfo(person2);

  export default GetPersonInfo
  