var cont = 0;
var tempoSlide = 8; // Tempo em segundos que indica a duração que um slide fica na tela;
var primeiroLoading = 0;
slideAutomatico();


function proxSlide(){

    if (cont == 0) {
        document.getElementById("banner1").style.display = "none";
        document.getElementById("banner2").style.display = "block";
        document.getElementById("bolinha1").style.backgroundColor = "#3c3c3c61";
        document.getElementById("bolinha2").style.backgroundColor = "#1d1d1d";
        cont = 1;
    } else if (cont == 1) {
        document.getElementById("banner2").style.display = "none";
        document.getElementById("banner3").style.display = "block";
        document.getElementById("bolinha2").style.backgroundColor = "#3c3c3c61";
        document.getElementById("bolinha3").style.backgroundColor = "#1d1d1d";
        cont = 2;
    } else if (cont == 2) {
        document.getElementById("banner3").style.display = "none";
        document.getElementById("banner4").style.display = "block";
        document.getElementById("bolinha3").style.backgroundColor = "#3c3c3c61";
        document.getElementById("bolinha4").style.backgroundColor = "#1d1d1d";
        cont = 3;
    } else if (cont == 3) {
        document.getElementById("banner4").style.display = "none";
        document.getElementById("banner1").style.display = "block";
        document.getElementById("bolinha4").style.backgroundColor = "#3c3c3c61";
        document.getElementById("bolinha1").style.backgroundColor = "#1d1d1d";
        cont = 0;
    }

}

function slideAnterior(){

    if (cont == 0) {
        document.getElementById("banner1").style.display = "none";
        document.getElementById("banner4").style.display = "block";
        document.getElementById("bolinha1").style.backgroundColor = "#3c3c3c61";
        document.getElementById("bolinha4").style.backgroundColor = "#1d1d1d";
        cont = 3;
    } else if (cont == 1) {
        document.getElementById("banner2").style.display = "none";
        document.getElementById("banner1").style.display = "block";
        document.getElementById("bolinha2").style.backgroundColor = "#3c3c3c61";
        document.getElementById("bolinha1").style.backgroundColor = "#1d1d1d";
        cont = 0;
    } else if (cont == 2) {
        document.getElementById("banner3").style.display = "none";
        document.getElementById("banner2").style.display = "block";
        document.getElementById("bolinha3").style.backgroundColor = "#3c3c3c61";
        document.getElementById("bolinha2").style.backgroundColor = "#1d1d1d";
        cont = 1;
    } else if (cont == 3) {
        document.getElementById("banner4").style.display = "none";
        document.getElementById("banner3").style.display = "block";
        document.getElementById("bolinha4").style.backgroundColor = "#3c3c3c61";
        document.getElementById("bolinha3").style.backgroundColor = "#1d1d1d";
        cont = 2;
    }

}

function slideAutomatico(){
    if (primeiroLoading == 0){
        setTimeout(slideAutomatico, tempoSlide*1000);
        primeiroLoading = 1;
    } else {
        setTimeout(slideAutomatico, tempoSlide*1000);
        proxSlide();
    }
    
}

