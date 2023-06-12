// let myName = "Aliaksei"
// console.log(myName)


// // ссылочный тип переменной 
// const linkA = {
//     a: 22,
//     b: "Aliaksei"
// }

// const linkCopyA = linkA

// linkCopyA.c = "abc"
// linkCopyA.d = 123
// console.log(linkA)


//// динамическая типизация
// function a() {
//     console.log("bhbh")
// }
// a()
// a = 10 
// a() // Error its not a function


// // стрелочная функция - лучше использовать такую функцию 

// const a = () => {   
//     console.log("Hey there")
// }
// a()
// a = 10 // Error assingment to cconstant variable
// a()


// // обьекты 
// const myCity = {
//     city: "New York",
//     popular: true,
//     country:"USA"
// }
// console.log(myCity)

// myCity.city = "Las Vegas"
// myCity.popular1 = "maybe"

// console.log(myCity)

// delete myCity.popular1
// console.log(myCity)

// // 
// let myCity = {
//     city: "Wachington",
//     info: {
//         isPopylar: true,
//         state: "DC"
//     }
// }
// console.log(myCity)

// const countryName = "country"
// myCity[countryName] = "USA"
// console.log(myCity)

// delete myCity.info["isPopylar"]
// console.log(myCity)

// let name = "Aliaksei"
// let age = 22

// let user = {
//     name: name,
//     age: age
// }
// console.log(user)
// // or

// let user1 = {
//     name,
//     age
// }
// console.log(user1)


// // методы c функциями 
// const myCity = {
//     city: "New York",
//     cityGreeteng: function() {
//         console.log("Hello New York")
//     }
// }
// myCity.cityGreeteng()

// let yourCity = {
//     city: "Las Vegas",
//     cityGreeteng() {     // можно не использовать function
//         console.log("Hello Las Vegas")
//     }
// }
// yourCity.cityGreeteng()



// // JSON
// let post = {
//     title: "hello",
//     number: 5
// }

// console.log(JSON.stringify(post))   // перевод с HTML В JSON 



// // !!! мутирование копий 
// const person = {
//     name: "Bob",
//     age: 22
// }
// const person2 = person // копирование ссылки (copy by reference) это НЕ КОПИРОВАНИЕ это коирование ссылки 

// person2.age = 26
// person2.city = "New York"

// console.log(person.age) // !!! изменяя person2 мы и изменяем исходник person
// console.log(person.city) // муьация ьакже отразиться и на person

// // как избежать 
// // 1. Создаьб копию и изменить только копию не трогая оригинал (но можно мутировать!!! ) 
// //проблема в const person = {name: { сдесь будет иземенено вместе с оригиалом}} 

// const person = {
//     name: "Bob",
//     age: 22
// }
// const person2 = Object.assign({}, person) // делает копию person 

// person2.age = 26
// person2.city = "New York"

// console.log(person.age)
// console.log(person2.age) 

// // 2. Создаьб копию и изменить только копию не трогая оригинал (но можно мутировать!!! ) 
// //проблема в const person = {name: { сдесь будет иземенено вместе с оригиалом}} ТАКАЯ ЖЕ ПРОБЛЕМА 
// const person = {
//     name: "Bob",
//     age: 22
// }
// const person2 = { ...person} // делает копию person (оператор spreed) оператор разделения обьекта на свойства

// person2.name = "Alice"

// console.log(person.name)
// console.log(person2.name) 

// // 3. Создаьб копию и изменить только копию не трогая оригинал ( ПОЛНОСТЬЮ  ИЗБЕЖАТЬ МУТАЦИЙ!!!  ) 
// const person = {
//     name: "Bob",
//     age: 25
// }
// const person2 = JSON.parse(JSON.stringify(person))
// person2.name = "Alice"

// console.log(person.name)
// console.log(person2.name)



// Функции 

// let a = 5
// let b = 3
// function sum(a, b) {
//     const c = a + b
//     console.log(c)
// }
// sum(a,b)
// a = 8
// b = 12
// sum(a, b)

let a = 10
let b = 20 
function sum(a,b) {
    let c
    a = a + 2
    a = (a + 3) / 5
    c = a + b
    return c
}
console.log(sum(a,b))






























