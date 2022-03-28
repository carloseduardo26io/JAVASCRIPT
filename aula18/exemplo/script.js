function verificar() {
   var data = new Date()
   var ano = data.getFullYear() //vai pegar 4 digitos, ano atual 
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if(fano.value.length == 0 || fano.value > ano ) {
       window.alert('[ERROR] Verifique os dados e tente novamente!')
   }else{
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if(fsex[0].checked) {
          genero = 'Homem'
          if(idade >0 && idade <10 ){
          //criança 
          img.setAttribute('src', 'criancaho.png')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'jovemho.png')
        } else if (idade <50){
        //Adulto
        img.setAttribute('src', 'adultoho.png')
        } else {
            //idoso
            img.setAttribute('src', 'velho.png')
        }
      } else if (fsex[1].checked){
          genero= 'mulher'
          if(idade >0 && idade <10 ){
            //criança 
            img.setAttribute('src', 'criancamu.png')
          } else if (idade < 21) {
              //jovem
              img.setAttribute('src', 'jovemmu.png')
          } else if (idade <50){
          //Adulto
          img.setAttribute('src', 'adultamu.png')
          } else {
              //idoso
              img.setAttribute('src', 'velha.png')
          }
      }
      res.style.textAlign= 'center'
      res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
   }res.appendChild(img) // aparecer foto na tela
    }