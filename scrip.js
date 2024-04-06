function carregar(){
    const msg = document.getElementById('msg')
    const body = document.body
    const date = new Date()
    const hora = date.getHours()
    const min = date.getMinutes()
    msg.innerHTML = `${hora}:${min}`
    if(hora >= 0 && hora < 12){
        //bom dia
        body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(/img/dia.jpg)"
    }else if (hora >= 12 && hora < 18){
        //boa tarde
        body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(/img/tarde-3.jpg)"
    }else{
        //boa noite
        body.style.backgroundImage = "url(/img/noite.jpg)"
    }

}

