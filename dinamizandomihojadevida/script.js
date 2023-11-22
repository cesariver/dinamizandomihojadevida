//Proyecto Integrador: Dinamizando tu Hoja de Vida usando Condiciones con JavaScript//

console.log("Hoja de Vida Interactiva Cargada");


document.getElementById('addSkill').addEventListener('click', function() {
    let newSkill = prompt("Introduce una nueva habilidad:");
    if (newSkill) {
        let ul = document.getElementById('skillsList'); // Suponiendo que tienes un <ul id="skillsList"> para tus habilidades
        let li = document.createElement('li');
        li.textContent = newSkill;
        ul.appendChild(li);
    }
});


 function myFunction() {
   let email = prompt("Por favor, ingresa tu correo electrónico:", "");
   if (email != null) {
     window.location.href = "mailto:" + email;
     alert("Gracias " + email + ", me pondré en contacto contigo pronto!"); 
   }

 }
 
 //Proyecto Integrador: Añadiendo Dinamismo a tu Hoja de Vida con Ciclos en JavaScript//

 const certificaciones = ["Curso A", "Curso B", "Taller C", "Seminario D"];

 function mostrarCertificaciones() {
    let ul = document.getElementById('listaCertificaciones'); // Suponiendo que tienes un <ul id="listaCertificaciones"> en tu HTML
    
    for (let i = 0; i < certificaciones.length; i++) {
        let li = document.createElement('li');
        li.textContent = certificaciones[i];
        ul.appendChild(li);
    }
}

window.onload = mostrarCertificaciones;
const botonProyectosAnteriores = document.getElementById("ver-proyectos-anteriores");

botonProyectosAnteriores.addEventListener("click", function() {
  const cantidadProyectos = prompt("¿Cuántos proyectos deseas ver?");
  // Aquí puedes agregar el código que muestra la cantidad de proyectos solicitados.
});

// Lista predefinida de proyectos
let proyectos = ["Proyecto 1", "Proyecto 2", "Proyecto 3", "Proyecto 4", "Proyecto 5"];

// Preguntar al usuario cuántos proyectos desea mostrar
let cantidadProyectos = prompt("¿Cuántos proyectos deseas mostrar?");

// Convertir la entrada del usuario a un número entero
cantidadProyectos = parseInt(cantidadProyectos);

// Usar un bucle for para mostrar la cantidad de proyectos especificada por el usuario
for (let i = 0; i < cantidadProyectos; i++) {
    console.log(proyectos[i]);
}



