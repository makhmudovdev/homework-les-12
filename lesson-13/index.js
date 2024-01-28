let n = prompt("qiymat kiriting")
n = n + ""

let teskarisi = n.split("").reverse().join("")
console.log(n == teskarisi);