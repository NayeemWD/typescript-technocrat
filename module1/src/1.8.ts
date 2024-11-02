{
    
// destructuring

// Object destrucruring
const user = {
    id: 345,
    name: {
        firstNme: 'Nayeem',
        middleName: 'Sujon',
        lastName: 'Anto'
    },
    contactNo: '01500000000',
    address: 'Kanchpur'
};


 const {
    contactNo,
    name: {firstNme: fName} //Name Alias
 } = user


 // Array destrucruring
 
 const myFriends = ['kabbo', 'hasan', 'alamin','bormon','mir', 'sujon', 'anto','fardin']

 const [, , bestfriend, ...rest] = myFriends

// console.log(bestfriend); //alamin
// console.log(rest);  //['bormon', 'mir', 'sujon', 'anto', 'fardin']














}