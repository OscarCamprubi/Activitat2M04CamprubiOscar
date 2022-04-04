let arrayFrases = [];

addEventListener('load', () => {
    let ticker = document.getElementById("ticker")
    let timer = creaTimer(ticker);
    let posicio;


    document.getElementById("aturar").addEventListener("click", () => {
        console.log("aturar");
        if (timer != null) {
            deleteTimer(timer);
            timer = null;
        } else {
            timer = creaTimer(ticker);
        }

    })
    document.getElementById("anterior").addEventListener("click", () => {
        console.log("ANTERIOR")
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        if (posicio == null || posicio === -1) {
            console.log("posicio = null");
            posicio = arrayFrases.length - 1;
        }
        console.log(arrayFrases[posicio])
        console.log("posicio No Editada:", posicio);
        posicio = posicio - 1;
        ticker.innerText = arrayFrases[posicio];
        console.log("Posicio Editada", posicio);
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    })


    document.getElementById("seguent").addEventListener("click", () => {
        console.log("SEGUENT");
        console.log("/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:")
        if (posicio == null) {
            console.log("posicio = null");
            posicio = arrayFrases.length;
        }else if (posicio > arrayFrases.length-1){
            posicio = 0;
        }
        console.log(arrayFrases[posicio])
        console.log("posicio No Editada:", posicio);
        posicio = posicio + 1;
        ticker.innerText = arrayFrases[posicio];
        console.log("Posicio Editada", posicio);

        console.log("/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:/:")
    })

})

function creaTimer(ticker) {
    return setInterval(function () {
        getFraseHora(ticker, getDate())
    }, 200);


}

function getFraseHora(div, date) {
    if (window.XMLHttpRequest) {
        peticioHttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        peticioHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    peticioHttp.onreadystatechange = () => {
        if (peticioHttp.readyState === 4) {
            if (peticioHttp.status === 200) {
                console.log(peticioHttp.responseText);
                div.innerText = peticioHttp.responseText + " " + date;
                arrayFrases.push(peticioHttp.responseText + " " + date);
            }
        }
    }
    peticioHttp.open('GET', '/servidor/generarContinguts.php')
    peticioHttp.send(null);
}

function getDate() {
    return new Date().toLocaleTimeString();

}

function deleteTimer(timer) {
    clearInterval(timer);
}


