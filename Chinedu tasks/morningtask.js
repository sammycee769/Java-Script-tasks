const person = 
{firstName: "Okere",
lastName: "Jerry",
age: 19
}
console.log(person)

person["email"]= "jerryokere@gmail.com"
console.log(person)

console.log(person.firstName)
console.log(person["firstName"])

delete person.lastName
console.log(person)



const student = 
{name: "Alimzy",
age: 29,
grade: "A"
}

student["school"] = "semicolon"
console.log(student)

student["grade"] = "B"
console.log(student)

delete student.age
console.log(student)

console.log(Object.keys(student))
console.log(Object.values(student))


