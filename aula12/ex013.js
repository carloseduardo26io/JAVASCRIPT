var agora= new Date()
var diasem = agora.getDay()
console.log (diasem)

/* 
0 - Domingo
1 - Segunda
2 - Terca
3 - Quarta
4 - Quinta 
5 - Sexta
6 - Sabado */

switch (diasem) {
    case 0: 
    console.log ('Domingo')
    break
    case 1: 
    console.log ('Segunda')
    break
    case 2: 
    console.log('Terca')
    break
    case 3: 
    console.log ('Quarta')
    break
    case 4: 
    console.log ('Quinta')
    break 
    case 5:
    console.log('Sexta')
    break
    case 6: 
    console.log ('sabado')
    break 

default: console.log ('[ERRO] Dia da  semana invalido.')
break
}