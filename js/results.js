

    let loaded = ( eventLoaded ) => {
        async function obtenerDatos() {
            const url = "https://dawm-2925a-default-rtdb.firebaseio.com/Collection.json"; // Reemplaza con la URL real de la API o recurso
            const respuesta = await fetch(url);
            if (!respuesta.ok) {
            console.error("Error:", respuesta.status);
            return;
            }
            const datos = await respuesta.json();
            let map = new Map();

            let total = 0;
            let tablebody = document.getElementById('tablebody');
            for (const key of datos) {
                let element = datos[key]
                let name = element['name']
                let counter = map.has(name)?map.get(name)+1:1;
                map.set(name, counter)
            }

            for (let key of map.keys()) {
                let template = `
                <tr>
                    <td>${key}</td>
                    <td>${map.get(key)}</td>
                </tr>
                `
                total += map.get(keys);
                tablebody.innerHTML += template
            }

            console.log(datos); // Procesar o mostrar los datos obtenidos
            }
            obtenerDatos();
    }
    
    window.addEventListener("DOMContentLoaded", loaded);