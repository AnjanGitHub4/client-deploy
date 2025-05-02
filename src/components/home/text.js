const person = {
  name: "John Doe",
  age: 30,
  email: "john@gmail.com",
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
    contact: {
      mob1: 1234567890,
      mob2: 9876543210,
      mob3: 1234567890,
    },
  },
};

let style = { color: "red" }; // initializing style variable to an empty object

//  object destructuring
const { name, age, email } = person; // destructuring the person object to get name, age and email properties

function showUserDetails1(props, { name, email }) {
  let { mob1, mob2 } = props.address.contact; // destructuring the address property from props
  console.log(props.email); // { name: 'John Doe', age: 30, email: '
  console.log(mob1, mob2); // { street: '123 Main St', city: 'New York', state: 'NY', zip: '10001' }
  console.log(name); // John Doe
  console.log(email); //
}


function showUserDetails( { name, email, address:{city, contact:{...rest} }} ) {
    // let { name, email, address:{city, contact:{...rest} }} = props; 
    // let { city, contact } = address;
    // let {mob1, mob2} = contact;

  console.log(name); // John Doe
  console.log(email); //
  console.log(city);
  console.log(rest); // rest ?

  for(let key in rest) {
    console.log(`${key} : ${rest[key]}`);
  }
}

showUserDetails(person);
