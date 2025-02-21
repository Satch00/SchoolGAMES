let jogoselecionado = null;

function doom(){
    window.location.href = 'https://satch00.github.io/SchoolGAMES/doom.pdf'
}

function Join(element){
    var elemento = document.querySelector('.info-games');
    jogoselecionado = element.querySelector('img').id;
    if (elemento.style.visibility == 'hidden'){
        console.log("o botão com id " + element.querySelector('img').id + " foi aberto")
        elemento.style.visibility = 'visible';
        if ( element.querySelector('img').id == "game3"){
            doom()
        }
    }else{
        console.log("o botão com id " + element.querySelector('img').id + " foi fechado")
        elemento.style.visibility = 'hidden';
    }

}

function butt(){
    switch (jogoselecionado){
        case "game0":
                console.log("Abrindo minecraft . . .");
                var minecraft = "https://satch00.github.io/EaglercraftX_1.8_WASM-GC_Offline_Download/mine1.html";
                document.getElementById("button").onclick = minecraft;
    }
}

/**     
function DoomDownload(){    
}
*/
