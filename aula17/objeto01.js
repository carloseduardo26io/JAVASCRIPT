let amigo = { nome: 'carlos',
 sexo: 'M', 
 peso: 60,
engorda (p){
console.log ('engordou')
this.peso += p 
}}
amigo.engorda(2)
console.log( `${amigo.nome} pesa ${amigo.peso} KG`)