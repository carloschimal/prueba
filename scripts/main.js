/*var hola = document.querySelector('h1');
hola.innerHTML = "Hola mundo!";
var uno = "Bob";

var helado = 'chocolate';
if (helado === 'chocolate') {
  alert('¡Si, amo el helado de chocolate!');    
} else {
  alert('Awwww, pero mi favorito es el de chocolate...');    
}
alert (mul(1,3));
document.querySelector('html').onclick = function hola(){
	alert("hola mundo");
}
function mul(nu1,nu2){
	var resultado = nu1 + nu2;
	return resultado;
}


var imagen = document.querySelector('img');
imagen.onclick = function (){
	var src = imagen.getAttribute('src');
	if(src === 'images/a.jpg'){
		imagen.setAttribute('src','images/b.jpg');
	}else{
		imagen.setAttribute('src','images/a.jpg')
	}
}
*/
var boton  = document.querySelector('button');
var titulo = document.querySelector('h1');

boton.onclick = function() {
    estableceNombreUsuario();
}



if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    titulo.textContent = 'Mozilla es fresco,' + nombreAlmacenado;
}


function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    titulo.textContent = 'Mozilla es fresco,' + miNombre;
}



