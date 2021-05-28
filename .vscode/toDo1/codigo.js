

 function pulsar(ev) {
     evento = ev || window.event;
     pulsado = evento.button;
     texto = document.getElementById("info");
      texto.innerHTML = "Valor del último botón del ratón pulsado: " + pulsado
      }
  window.onload = function() {
  document.documentElement.onmousedown = pulsar
  }
 ////////  CLASE   ToDo tareas 
const formulario = document.getElementById('formulario');
const input = document.getElementById('input');
const tareasul = document.getElementById('tareas');
var tareaElemento;

 const tareas = JSON.parse(localStorage.getItem("tareas"));
 if (tareas) {
     tareas.forEach((tarea) => {
         nuevaTarea(tarea);
     })}

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    nuevaTarea();
});

function nuevaTarea(tarea) {
     tareaTexto = input.value;
   if(tarea){ 
     tareaTexto = tarea.text;
   }

if(tareaTexto)
{
 let tareaElemento = document.createElement('li');
   if (tarea && tarea.hecha) {
       tareaElemento.classList.add("hecha");
   }
    tareaElemento.innerText = tareaTexto;

   tareaElemento.addEventListener('click', () =>{
       tareaElemento.classList.toggle('hecha');
       actualizalista();
   });
   
   tareaElemento.addEventListener("contextmenu", (e)=>{

    e.preventDefault();
    tareaElemento.remove();
    actualizalista();

   });
   tareasul.appendChild(tareaElemento);
   input.value = "";
   actualizalista();
    }
  
}

 function actualizalista() {
    
     tareasElementos = document.querySelectorAll("li");

    const tareas = [];

   tareasElementos.forEach((tareaElemento) => {
  //  guardar en memoria
    tareas.push({
        text: tareaElemento.innerText,
        hecha: tareaElemento.classList.contains("hecha")
    });
   })
 localStorage.setItem("tareas",JSON.stringify(tareas));
 }

