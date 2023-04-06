// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number,string];
// } = {
//     name: "Maximilian",
//     age: 30,
//     hobbies: ["Sprots","Cooking"],
//     role: [2, 'author']
// }
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
enum Role {ADMIN, READ_ONLY, AUTHOR}

const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sprots","Cooking"],
    role: Role.AUTHOR
}


let favorit: string[];
favorit = ["Sports"]


console.log(person);
for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}