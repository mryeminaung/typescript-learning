
type Address = {
    street?: string
    city: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address: Address
}

let person: Person = {
    name: 'John',
    age: 20,
    isStudent: false,
    address: { city: 'New York' }
}


console.log(person.isStudent);