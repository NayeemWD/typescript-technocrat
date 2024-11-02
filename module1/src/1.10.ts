{
// union
// type FrontendDeveloper = 'fakibazDebeloper' | 'juniorDeveloper'
// type FullstackDeveloper = 'frontendDebeloper' | 'expertDeveloper'

// type Developer = FrontendDeveloper | FullstackDeveloper

// // const newDeveloper : FrontendDeveloper = 'juniorDeveloper'
// const newDeveloper : FrontendDeveloper = 'fakibazDebeloper'

// type User = {
//     name: string;
//     email?: string;
//     gender: 'mail' | 'femail';
//     bloodGroup: 'O+' | 'A+' | 'B+'
// }

// const user1: User = {
//     name: 'Nayeem',
//     gender: 'mail',
//     bloodGroup: 'O+'
// }




type FrontendDeveloper = {
    skills: string[];
    designation1: 'Frontend Developer'
}
type BackendDeveloper = {
    skills: string[];
    designation2: 'Backend Developer'
}

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

const fullstackDeveloper: FullstackDeveloper = {
    skills: ['HTML', 'CSS', 'EXPRESS'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
}

}

