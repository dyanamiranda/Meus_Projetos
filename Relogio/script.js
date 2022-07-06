function carregar(){
    var img = window.document.querySelector('#imagem')
    var msg = window.document.querySelector('#msg')
    var sdc = window.document.querySelector('#saudacao')

    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = (`Agora são ${hora} horas`)

    if(hora >= 0 && hora < 12){
       //Bom dia
       img.src = 'manha.png'
       sdc.innerHTML = 'Bom Dia!'
       document.body.style.background = '#ddbb9f'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'tarde.png'
        sdc.innerHTML = 'Boa Tarde!'
        document.body.style.background = '#f0965a'
    } else {
        //Boa noite
        img.src = 'noite.png'
        sdc.innerHTML = 'Boa Noite!'
        document.body.style.background = '#1156a8'
    }
}