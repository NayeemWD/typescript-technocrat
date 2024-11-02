{
// Type Alias

type Student = {
    name: string;
    age: number;
    gender: string;
    contacuNo? : string;
    address: string
}



// const student1: {
//     name: string;
//     age: number;
//     gender: string;
//     contacuNo: string;
//     address: string
// } = {
//     name: 'Nayeem',
//     age: 20,
//     gender: 'mail',
//     contacuNo: '015000000',
//     address: 'Kanchpur'
// }



const student1: Student = {
    name: 'Sujon',
    age: 22,
    gender: 'mail',
    contacuNo: '015000000',
    address: 'BaserPull'
}
const student2: Student = {
    name: 'Nayeem',
    age: 20,
    gender: 'mail',
    address: 'Kanchpur'
}
const student3: Student = {
    name: 'Anto',
    age: 20,
    gender: 'mail',
    contacuNo: '0170000000',
    address: 'Katherpull'
}



type UserName = string
type IsAdmin = boolean
const userName : UserName = 'Persian '
const isAdmin: IsAdmin = true


type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;


}