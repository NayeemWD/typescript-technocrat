{
    
// spread operator
// rest operator
// destructuring

// learn spread operator

const bors1: string[] = ['mir', 'sujon', 'anto','fardin']
const bors2: string[] = ['kabbo', 'hasan', 'alamin','bormon']

bors1.push(...bors2)


const mentors1 = {
    typescript: 'Mezba',
    redux: 'Mir',
    dbms: 'Mizan'
}


const mentors2= {
    prisma: 'Firoz',
    next: 'Tonmoy',
    cloud: 'nahid'
}

const mentorList = {
    ...mentors1,
    ...mentors2
}


//learn rest opeartor

const greetFtiends = (...friends: string[]) => {
    // console.log(`Hi ${friedn1} ${friedn2} ${friedn3}`);

    friends.forEach((friend: string) => console.log(`Hi ${friend}`))

}

greetFtiends('abul', 'babul','kabul');



}