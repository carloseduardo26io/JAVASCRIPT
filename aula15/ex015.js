let num = [4,5,2,6]
num.sort( )
num.push(1)
console.log(num)
console.log (`O vetor tem  ${num.length} posicoes`)
console.log (`O primeiro valor é ${num[1]}`)
let pos = num.indexOf(7)
if (pos ==-1) {
    console.log(`Valor não encrontado `)
}
else{
    console.log(`o valor 2 esta na posição ${pos}`)
}