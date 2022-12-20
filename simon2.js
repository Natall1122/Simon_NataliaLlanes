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
let m = 0;

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
    
}

if (m == 0) {
    comprobacio();
} else if (m == 1) {
    comprobacio2();
} else if (m == 2) {
    comprobacio3();
} else if (m == 3) {
    comprobacio4();
}



function comprobacio() {
    daltEsquerra.addEventListener('click', function main1() {
        daltEsquerra.style.backgroundColor = 'lightyellow';
        setTimeout(function () {
            daltEsquerra.style.backgroundColor = 'yellow';

            if (secuencia[n] == 0) {
                joc2(); 
                daltEsquerra.removeEventListener('click', main1);
            } else {
                alert('Has perdido');
                location.reload();
            }
        }, 500);
    }
    );
    daltDreta.addEventListener('click', function main2() {
        daltDreta.style.backgroundColor = 'lightblue';
        setTimeout(function () {
            daltDreta.style.backgroundColor = 'blue';

            if (secuencia[n] == 1) {
                joc2();
                daltDreta.removeEventListener('click', main2);
            } else {
                alert('Has perdido');
                location.reload();
            }
        }, 500);
    }
    );
    baixEsquerra.addEventListener('click', function main3() {
        baixEsquerra.style.backgroundColor = 'lightcoral';
        setTimeout(function () {
            baixEsquerra.style.backgroundColor = 'red';

            if (secuencia[n] == 2) {
                joc2();
                baixEsquerra.removeEventListener('click', main3);
            } else {
                alert('Has perdido');
                location.reload();
            }
        }, 500);
    }
    );
    baixDreta.addEventListener('click', function main4() {
        baixDreta.style.backgroundColor = 'lightgreen';
        setTimeout(function () {
            baixDreta.style.backgroundColor = 'green';

            if (secuencia[n] == 3) {
                joc2();
                baixDreta.removeEventListener('click', main4);
            } else {
                alert('Has perdido');
                location.reload();
            }
        }, 500);
    }
    );

}


function joc2() {
    m++;

    let interval1 = setTimeout(function () {
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
            clearInterval(interval1);
        }
    }, 500);   
    

    let interval2 = setTimeout(function () {
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
            clearInterval(interval2);
        }
    }, 1000);
 
}

function comprobacio2() {
    daltEsquerra.addEventListener('click', function () {
        daltEsquerra.style.backgroundColor = 'lightyellow';
        setTimeout(function () {
            daltEsquerra.style.backgroundColor = 'yellow';

            if (secuencia[j] == 0) {
                joc3();
            } else {
                alert('Has perdido');
                location.reload();
            }
        }, 500);
    }
    );
    daltDreta.addEventListener('click', function () {
        daltDreta.style.backgroundColor = 'lightblue';
        setTimeout(function () {
            daltDreta.style.backgroundColor = 'blue';

            if (secuencia[j] == 1) {
                joc3();
            } else {
                alert('Has perdido');
                location.reload();
            }
        }, 500);
    }  
    );
    baixEsquerra.addEventListener('click', function () {
        baixEsquerra.style.backgroundColor = 'lightcoral';
        setTimeout(function () {
            baixEsquerra.style.backgroundColor = 'red';

            if (secuencia[j] == 2) {
                joc3();
            } else {
                alert('Has perdido');
                location.reload();
            }
        }, 500);
    }
    );
    baixDreta.addEventListener('click', function () {
        baixDreta.style.backgroundColor = 'lightgreen';
        setTimeout(function () {
            baixDreta.style.backgroundColor = 'green';

            if (secuencia[j] == 3) {
                joc3();
            } else {
                alert('Has perdido');
                location.reload();
            }
        }, 500);
    }
    );


}  

function joc3() {
    m++;
    let interval1 = setTimeout(function () {
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
            clearInterval(interval1);
        }
    }, 500);   
    

    let interval2 = setTimeout(function () {
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
            clearInterval(interval2);
        }
    }, 1000);

    let interval3 = setInterval(function () {
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
            clearInterval(interval3);
        }
    }, 1500);
    
}

function comprobacio3() {
    daltEsquerra.addEventListener('click', function () {
        daltEsquerra.style.backgroundColor = 'lightyellow';
        setTimeout(function () {
            daltEsquerra.style.backgroundColor = 'yellow';
            if (secuencia[n] == 0) {
                if (secuencia[j] == 0) {
                    joc4();
                } else {
                    alert('Has perdido');
                    location.reload();
                }
            } else {
                alert('Has perdido');
                location.reload();
            }

        }, 500);
    }
    );
    daltDreta.addEventListener('click', function () {
        daltDreta.style.backgroundColor = 'lightblue';
        setTimeout(function () {
            daltDreta.style.backgroundColor = 'blue';

            if (secuencia[n] == 1) {
                if (secuencia[j] == 1) {
                    joc4();
                } else {
                    alert('Has perdido');
                    location.reload();
                }
            } else {
                alert('Has perdido');
                location.reload();
            }
        }, 500);
    }
    );
    baixEsquerra.addEventListener('click', function () {
        baixEsquerra.style.backgroundColor = 'lightcoral';
        setTimeout(function () {
            baixEsquerra.style.backgroundColor = 'red';

            if (secuencia[n] == 2) {
                if (secuencia[j] == 2) {
                    joc4();
                } else {
                    alert('Has perdido');
                    location.reload();
                }
            } else {
                alert('Has perdido');
                location.reload();
            }
        }, 500);
    }
    );
    baixDreta.addEventListener('click', function () {
        baixDreta.style.backgroundColor = 'lightgreen';
        setTimeout(function () {
            baixDreta.style.backgroundColor = 'green';

            if (secuencia[n] == 3) {
                if (secuencia[j] == 3) {
                    joc4();
                } else {
                    alert('Has perdido');
                    location.reload();
                }
            } else {
                alert('Has perdido');
                location.reload();
            }
        }, 500);
    }
    );
}  




function joc4() {
    m++;
    let interval1 = setTimeout(function () {
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
            clearInterval(interval1);
        }
    }, 500);   
    

    let interval2 = setTimeout(function () {
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
            clearInterval(interval2);
        }
    }, 1000);

    let interval3 = setInterval(function () {
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
            clearInterval(interval3);
        }
    }, 1500);

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
    
}

function comprobacio4(){}









/*     daltEsquerra.addEventListener('click', function () {
        daltEsquerra.style.backgroundColor = 'lightyellow';
        setTimeout(function () {
            daltEsquerra.style.backgroundColor = 'yellow';
            if (secuencia[n] == 0) {
                if (secuencia[j] == 0) {
                    joc3();
                } else {
                    alert('Has perdido');
                    location.reload();
                }
            } else {
                alert('Has perdido');
                location.reload();
            }

        }, 500);
    }
    );
    daltDreta.addEventListener('click', function () {
        daltDreta.style.backgroundColor = 'lightblue';
        setTimeout(function () {
            daltDreta.style.backgroundColor = 'blue';

            if (secuencia[n] == 1) {
                if (secuencia[j] == 1) {
                    joc3();
                } else {
                    alert('Has perdido');
                    location.reload();
                }
            } else {
                alert('Has perdido');
                location.reload();
            }
        }, 500);
    }
    );
    baixEsquerra.addEventListener('click', function () {
        baixEsquerra.style.backgroundColor = 'lightcoral';
        setTimeout(function () {
            baixEsquerra.style.backgroundColor = 'red';

            if (secuencia[n] == 2) {
                if (secuencia[j] == 2) {
                    joc3();
                } else {
                    alert('Has perdido');
                    location.reload();
                }
            } else {
                alert('Has perdido');
                location.reload();
            }
        }, 500);
    }
    );
    baixDreta.addEventListener('click', function () {
        baixDreta.style.backgroundColor = 'lightgreen';
        setTimeout(function () {
            baixDreta.style.backgroundColor = 'green';

            if (secuencia[n] == 3) {
                if (secuencia[j] == 3) {
                    joc3();
                } else {
                    alert('Has perdido');
                    location.reload();
                }
            } else {
                alert('Has perdido');
                location.reload();
            }
        }, 500);
    }
    ); */