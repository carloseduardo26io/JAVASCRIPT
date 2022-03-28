function contar() {
var ini = document.getElementById('inxt')
var fim = document.getElementById('fixt')
var pas = document.getElementById('paxt')
var res = document.getElementById('res')

if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
window.alert('Erro')
} else {
   res.innerHTML = 'Contando:'
   var i = Number(ini.value) // valor de (var = ini)  converter para numero
   var f = Number(fim.value) 
   var p = Number(pas.value)

   for (var c = 1; c <= f; c += p) {
       res.innerHTML += `${c}`
   }
}
}