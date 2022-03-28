function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() // hora atual
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12 ) {
        //BOM DIA !
        img.src = "manha.png.png"
        document.body.style.background = '#C46210'
    } else if (hora >=12 && hora <18 ) {
        // BOA TARDE!
        img.src = "tarde.png.png"
        document.body.style.background = '#5072A7'
    } else {
        // BOA NOITE!
        img.src = "noite.png.png"
        document.body.style.background = '#B284BE'
    }

}
   




