/*let loaded = ( eventLoaded ) => {
  
    window.alert("landing page loaded");
    console.log( eventLoaded );
    debugger;
  
}

window.addEventListener("DOMContentLoaded", loaded);*/

/*let loaded = ( eventLoaded ) => {

    let myform = document.getElementById('form');
    debugger;
  
  }

window.addEventListener("DOMContentLoaded", loaded);*/

/*let loaded = (eventLoaded) => {

  let myform = document.getElementById('form');

  myform.addEventListener('submit', (eventSubmit) => {

    debugger;

  })

}
window.addEventListener("DOMContentLoaded", loaded);*/

form.addEventListener('submit', (eventSubmit) => {

  eventSubmit.preventDefault()
  if (form_name.value.length == 0) {
    alert("Nombre requerido")
    form_name.focus()
    return;
  }
  if (form_email.value.length == 0) {
    alert("Email requerido")
    form_email.focus()
    return;
  }
})

const formulario = document.getElementById('form');
formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  const nombre = document.getElementById('form_name').value
  const email = document.getElementById('form_email').value
  const datos = {
    nombre: nombre,
    email: email,
  };
  fetch('https://dawm-2925a-default-rtdb.firebaseio.com/Collection.json', {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(respuesta => respuesta.json())
    .then(datos => {
      console.log(datos); // Imprimir la respuesta del servidor
    })
    .catch(error => console.error(error));
    window.alert("Respuesta guardada");
  });
