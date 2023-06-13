
//// 6. Запросить у сотрудника (логичистической компании) ко-во часов полета транспортного средства (самолета) и вывести время, в которое он вернется назад

//// 1.
// let x = +prompt("Во сколкьо вылет")
// let z = +prompt("Сколько летел")

// function plain(x, z) {
//     if (z % 24 == 0) {
//     console.log(x)
//     } else if (z % 12 == 0) {
//     console.log(x + 12)
//     }else if (z > 24) {
//         let y = z % 24
//         if (y > 0) {
//             let w = y + x
//             if ( w > 24)
//             console.log(w % 24)} 
//     } else if (z < 12) {
//         console.log(x + z)
//     } else {
//         let w = z - 24
//         console.log(w + x)
//     }
// }

// plain(x, z)


//// 2. 
// function flyTime(startTime, flyTime) {
//     let result = 0

//     result = startTime + (flyTime % 24);

//    return result % 24
// }
// console.log(flyTime(10, 19));