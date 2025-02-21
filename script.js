let jogoselecionado = null;

/**
function doom(){
    window.location.href = 'https://satch00.github.io/SchoolGAMES/doom.pdf'
}
**/

function Join(element){
    var elemento = document.querySelector('.info-games');
    jogoselecionado = element.querySelector('img').id;
    if (elemento.style.visibility == 'hidden'){
        console.log("o botão com id " + element.querySelector('img').id + " foi aberto")
        elemento.style.visibility = 'visible';
    }else{
        console.log("o botão com id " + element.querySelector('img').id + " foi fechado")
        elemento.style.visibility = 'hidden';
    }

}

function butt(){
    console.log("JOGO:" + jogoselecionado);
    switch (jogoselecionado){
        case "game0":
                console.log("Abrindo minecraft . . .");
                window.location.href = 'https://satch00.github.io/SchoolGAMES/EaglercraftX_1.8_WASM-GC_Offline_Download/mine1.html';
                break;
            
        case "game3":
                console.log("Abrindo doom PDF . . .");
                window.location.href = 'https://satch00.github.io/SchoolGAMES/doom.pdf';
                break;
    }
}

/**     
function DoomDownload(){    
}
*/
