/*  0 = daltEsquerra
    1 = daltDreta
    2 = baixEsquerra
    3 = baixDreta  */


let play = document.getElementsByTagName('h1')[0];
let daltEsquerra = document.getElementsByTagName('div')[0];
let daltDreta = document.getElementsByTagName('div')[1];
let baixEsquerra = document.getElementsByTagName('div')[2];
let baixDreta = document.getElementsByTagName('div')[3];
let secuencia = [];

let n = 0;
let j = 1;
let k = 2;
let l = 3;
let solucio = [];


play.addEventListener('click', function () {
    play.style.display = 'none';
    daltEsquerra.style.backgroundColor = 'yellow';
    daltDreta.style.backgroundColor = 'blue';
    baixEsquerra.style.backgroundColor = 'red';
    baixDreta.style.backgroundColor = 'green';


    for (let i = 0; i < 4; i++) {
        secuencia.push(Math.floor(Math.random() * 4));
    }
    console.log(secuencia);
    joc();
});

function joc() {
    let interval = setTimeout(function () {
        if (secuencia[n] == 0) {
            daltEsquerra.style.backgroundColor = 'white';
            setTimeout(function () {
                daltEsquerra.style.backgroundColor = 'yellow';
            }, 500);
        } else if (secuencia[n] == 1) {
            daltDreta.style.backgroundColor = 'white';
            setTimeout(function () {
                daltDreta.style.backgroundColor = 'blue';
            }, 500);
        } else if (secuencia[n] == 2) {
            baixEsquerra.style.backgroundColor = 'white';
            setTimeout(function () {
                baixEsquerra.style.backgroundColor = 'red';
            }, 500);
        } else if (secuencia[n] == 3) {
            baixDreta.style.backgroundColor = 'white';
            setTimeout(function () {
                baixDreta.style.backgroundColor = 'green';
            }, 500);
        }
        if (n == secuencia.length - 1) {
            clearInterval(interval);
            
        }
    }, 500);
    comprobacio();
}


function joc2() {

    joc();

    let interval = setTimeout(function () {
        if (secuencia[j] == 0) {
            daltEsquerra.style.backgroundColor = 'white';
            setTimeout(function () {
                daltEsquerra.style.backgroundColor = 'yellow';
            }, 500);
        } else if (secuencia[j] == 1) {
            daltDreta.style.backgroundColor = 'white';
            setTimeout(function () {
                daltDreta.style.backgroundColor = 'blue';
            }, 500);
        } else if (secuencia[j] == 2) {
            baixEsquerra.style.backgroundColor = 'white';
            setTimeout(function () {
                baixEsquerra.style.backgroundColor = 'red';
            }, 500);
        } else if (secuencia[j] == 3) {
            baixDreta.style.backgroundColor = 'white';
            setTimeout(function () {
                baixDreta.style.backgroundColor = 'green';
            }, 500);
        }
        if (j == secuencia.length - 1) {
            clearInterval(interval);
        }
    }, 1000);
    comprobacio();
}

function joc3() {
    joc();
    joc2();

    let interval = setInterval(function () {
        if (secuencia[k] == 0) {
            daltEsquerra.style.backgroundColor = 'white';
            setTimeout(function () {
                daltEsquerra.style.backgroundColor = 'yellow';
            }, 500);
        } else if (secuencia[k] == 1) {
            daltDreta.style.backgroundColor = 'white';
            setTimeout(function () {
                daltDreta.style.backgroundColor = 'blue';
            }, 500);
        } else if (secuencia[k] == 2) {
            baixEsquerra.style.backgroundColor = 'white';
            setTimeout(function () {
                baixEsquerra.style.backgroundColor = 'red';
            }, 500);
        } else if (secuencia[k] == 3) {
            baixDreta.style.backgroundColor = 'white';
            setTimeout(function () {
                baixDreta.style.backgroundColor = 'green';
            }, 500);
        }
        if (k == secuencia.length - 1) {
            clearInterval(interval);
        }
    }, 1500);
    comprobacio();
}

function joc4() {

    joc();
    joc2();
    joc3();

    let interval = setInterval(function () {
        if (secuencia[l] == 0) {
            daltEsquerra.style.backgroundColor = 'white';
            setTimeout(function () {
                daltEsquerra.style.backgroundColor = 'yellow';
            }, 500);
        } else if (secuencia[l] == 1) {
            daltDreta.style.backgroundColor = 'white';
            setTimeout(function () {
                daltDreta.style.backgroundColor = 'blue';
            }, 500);
        } else if (secuencia[l] == 2) {
            baixEsquerra.style.backgroundColor = 'white';
            setTimeout(function () {
                baixEsquerra.style.backgroundColor = 'red';
            }, 500);
        } else if (secuencia[l] == 3) {
            baixDreta.style.backgroundColor = 'white';
            setTimeout(function () {
                baixDreta.style.backgroundColor = 'green';
            }, 500);
        }
        if (k == secuencia.length - 1) {
            clearInterval(interval);
        }
    }, 1500);
    comprobacio();
}


function comprobacio() {
    daltEsquerra.addEventListener('click', function () {
        daltEsquerra.style.backgroundColor = 'lightyellow';
        setTimeout(function () {
            daltEsquerra.style.backgroundColor = 'yellow';
        }, 500);
        solucio.push(0);
        comprovar();
    }
    );
    daltDreta.addEventListener('click', function () {
        daltDreta.style.backgroundColor = 'lightblue';
        setTimeout(function () {
            daltDreta.style.backgroundColor = 'blue';
            
        }, 500);
        solucio.push(1);
        comprovar();
    }
    );
    baixEsquerra.addEventListener('click', function () {
        baixEsquerra.style.backgroundColor = 'lightcoral';
        setTimeout(function () {
            baixEsquerra.style.backgroundColor = 'red'; 
        }, 500);
        solucio.push(2);
        comprovar();
    }
    );
    baixDreta.addEventListener('click', function () {
        baixDreta.style.backgroundColor = 'lightgreen';
        setTimeout(function () {
            baixDreta.style.backgroundColor = 'green';
        }, 500);
        solucio.push(3);
        comprovar();
    }
    );
    

}

function comprovar() {

    if (solucio[0] == secuencia [0]) {
        joc2();
    } else if (solucio[0] == secuencia [0] && solucio[1] == secuencia [1]) {
        joc3();
    } else if (solucio[0] == secuencia [0] && solucio[1] == secuencia [1] && solucio[2] == secuencia [2]) {
        joc4(); 
    } else if (solucio[0] == secuencia [0] && solucio[1] == secuencia [1] && solucio[2] == secuencia [2] && solucio[3] == secuencia [3]) {
        alert('Has guanyat');
    }else {
        alert('Has perdut');
    }

}