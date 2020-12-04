'use strict'

var nombre = null;
var apellido = null;
var direccion = null;
var ccusuario = null;
var ccpaswd = null;
var email = null;
var telefono = null;
var usuario = document.querySelector('#usuario');

const sacarDatos = () => {
	nombre = document.querySelector('#nombre').value;
	apellido = document.querySelector('#apellido').value;
	direccion = 

window.addEventListener('load', function(){
	
	formulario.addEventListener('submit', function(){
		sacarDatos();
		
		if(nombre.trim() == null || nombre.trim().length <= 2){
			document.querySelector('#nombre + span').innerHTML = 'Nombre no es válido';
			return false;
      
		}else if(apellido.trim() == null || apellido.trim().length <= 2){
			document.querySelector('#apellido + span').innerHTML = 'Apellido no es válido';
			return false;
      
		}else if(direccion.trim() == null || direccion.trim().length < 2){
			document.querySelector('#direccion + span').innerHTML = 'Dirección no es válida';
			return false;
      
      		}else if(ccusuario == null || ccusuario >= 10){
			document.querySelector('#ccusuario + span').innerHTML = 'Ingrese el usuario correctamente';
			return false;
            
          }else if(ccpaswd == null || ccpaswd >= 15){
			document.querySelector('#ccpaswd + span').innerHTML = 'Ingrese la contraseña correctamente';
			return false;
            
          }else if(email == null || email >= 2){
			document.querySelector('#email + span').innerHTML = 'Ingrese el email correctamente';
			return false;
            
          }else if(telefono == null || telefono >= 2){
			document.querySelector('#telefono + span').innerHTML = 'Ingrese el telefono correctamente';
			return false;            
            
      
		}else{
			document.querySelector('#nombre + span').innerHTML = '';
			document.querySelector('#apellido + span').innerHTML = '';
			document.querySelector('#direccion + span').innerHTML = '';
			alert('Datos enviados');
		}
    
    
    
    (document).ready(function(){
var maxChars = $("#sessionNum");
var max_length = maxChars.attr('maxlength');
if (max_length > 0) {
       maxChars.bind('keyup', function(e){
           length = new Number(maxChars.val().length);
           counter = max_length-length;
           $("#sessionNum_counter").text(counter);
         
         function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}
       });
}
    
});
		
	});
});