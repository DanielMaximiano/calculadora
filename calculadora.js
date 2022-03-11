function insert (num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean ()
{ 
    document.getElementById('resultado').innerHTML = "";
}
function back ()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular ()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    { 
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}
window.onload = function() {
    document.addEventListener('keydown', keyTeclado);
}

function keyTeclado(e) {
    var keyCode = e.keyCode;
    console.log(keyCode);


    switch (keyCode) {
        case 97: 
        case 49: 
            insert('1');
            break;
    }
}

