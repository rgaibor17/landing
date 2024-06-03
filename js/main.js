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

let loaded = ( eventLoaded ) => {

    let myform = document.getElementById('form');
    
    myform.addEventListener('submit', ( eventSubmit ) => { 
  
      debugger;
  
    })
  
  }
window.addEventListener("DOMContentLoaded", loaded);