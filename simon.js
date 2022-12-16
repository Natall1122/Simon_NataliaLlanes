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

play.addEventListener('click', function () {
    play.style.display = 'none';
    daltEsquerra.style.backgroundColor = 'yellow';
    daltDreta.style.backgroundColor = 'blue';
    baixEsquerra.style.backgroundColor = 'red';
    baixDreta.style.backgroundColor = 'green';
    
    
    for (let i = 0; i < 4; i++) {
        secuencia.push(Math.floor(Math.random() * 4));
    }    
    joc();   
});

function joc() {
    let i = 0;

    let interval = setInterval(function () {
        if (secuencia[i] == 0) {
            daltEsquerra.style.backgroundColor = 'white';
            setTimeout(function () {
                daltEsquerra.style.backgroundColor = 'yellow';
            }, 500);
        } else if (secuencia[i] == 1) {
            daltDreta.style.backgroundColor = 'white';
            setTimeout(function () {
                daltDreta.style.backgroundColor = 'blue';
            }, 500);
        } else if (secuencia[i] == 2) {
            baixEsquerra.style.backgroundColor = 'white';
            setTimeout(function () {
                baixEsquerra.style.backgroundColor = 'red';
            }, 500);
        } else if (secuencia[i] == 3) {
            baixDreta.style.backgroundColor = 'white';
            setTimeout(function () {
                baixDreta.style.backgroundColor = 'green';
            }, 500);
        }
        if (i == secuencia[0]) {
            clearInterval(interval);
        }

        
        daltEsquerra.addEventListener('click', function () {
            daltEsquerra.style.backgroundColor = 'lightyellow';
            setTimeout(function () {
                daltEsquerra.style.backgroundColor = 'yellow';
            }, 500);
        }
        );
        daltDreta.addEventListener('click', function () {
            daltDreta.style.backgroundColor = 'lightblue';
            setTimeout(function () {
                daltDreta.style.backgroundColor = 'blue';
            }, 500);
        }
        );
        baixEsquerra.addEventListener('click', function () {
            baixEsquerra.style.backgroundColor = 'lightcoral';
            setTimeout(function () {
                baixEsquerra.style.backgroundColor = 'red';
            }, 500);
        }
        );
        baixDreta.addEventListener('click', function () {
            baixDreta.style.backgroundColor = 'lightgreen';
            setTimeout(function () {
                baixDreta.style.backgroundColor = 'green';
            }, 500);
        }
        );
    }, 500);
    
    /* comprobar que se ha hecho click donde toca */

}