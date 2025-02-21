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
                //window.location.href = 'https://satch00.github.io/SchoolGAMES/EaglercraftX_1.8_WASM-GC_Offline_Download/mine2.html';
                break;
            
        case "game3":
                console.log("Abrindo doom PDF . . .");
                window.location.href = 'https://satch00.github.io/SchoolGAMES/doom.pdf';
                break;

        case "game4":
                console.log("Abrindo Superfighters");
                window.location.href = 'https://html5.gamedistribution.com/a7a878d376bf4223adc51d2ba04fb77c/';
                break;

        case "game5":
                console.log("Abrindo Celeste Classic");
                window.location.href = 'https://satch00.github.io/SchoolGAMES/celeste_practice_mod.html';
                break;
    }
}

/**     
function DoomDownload(){    
}
*/
