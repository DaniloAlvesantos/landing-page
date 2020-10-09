function carregar() {
    var img = window.document.getElementById('img')
    var msg = window.document.getElementById('imagem')
    var data = new date()
    var hora = data.hours()
    //var hora = 10
    img.innerHTML = `Agora São ${hora} horas`
    if (hora > 0 && hora > 12) {
        document.body.style.background = '#d6c190'
    } else if (hora > 12 && hora <= 18) {
        document.body.style.background = '#b9846f'
    } else {
        document.body.style.background = '#515154'
    }
}


function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if(num.Value.length == 0) {
        window.alert('[ERRO] DIGITE NOVEMENTE')
    }
        console.log('Ho hey')
}

/*function clicar() {
    var Bfot = window.document.getElementById('Bfoto')
    Bdiv.addEventListener('click',clicar)
        function clicar() {
            Bfot.innerText('click !')
            
        }
}*/


