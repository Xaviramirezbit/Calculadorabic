const inputname = document.getElementById('inputname')
const inputapellido = document.getElementById('inputapellido')
const inputcorreo = document.getElementById('inputcorreo')
const inputcelular = document.getElementById('inputcelular')
const nombremensaje =document.getElementById('nombremensaje')
console.log(inputname)

function validarformulario(event){
    event.preventDefault()
    if(inputname.value == ""){
        swal("error!", "Hay un error, por favor llena los campos para continuar!", "error");
        inputname.classList.add('alert');
        nombremensaje.innerText = 'Llene el campo por favor'
        inputname.placeholder = 'EJ Larry'

    }

    if (inputname.value !== ""){
        swal("Muchas Gracias!", "puedes dar click en el boton para continuar!", "success");
        setTimeout(()=> {

        window.location= "./Calculadora.html"
        },2000)
  } 


}