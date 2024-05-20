console.log('LOAD LIB FORMULARIO-SUGERENCIAS');

function save(){
    try{
        let messageError = "";
        let nombre = document.getElementById('nombre').value;
        console.log('Nombre: ' + nombre);
        let apellido = document.getElementById('apellido').value;
        console.log('Apellido: ' + apellido);
        let numero = document.getElementById('numero').value;
        console.log('Numero: ' + numero);
        let correo = document.getElementById('correo').value;
        console.log('Correo: ' + correo);
        let direccion = document.getElementById('direccion').value;
        console.log('direccion: ' + direccion);
        let sugerencia = document.getElementById('sugerencia').value;
        console.log('sugerencia: ' + sugerencia);

        if(nombre == ""){
            console.log('nombre vacío');
            messageError = `${messageError} Debe ingresar su <b>nombre</b>.<br>`;
            console.log(`messageError: ${messageError}`);
        }
        if(apellido === ""){
            console.log('Apellido vacío');
            messageError = `${messageError} Debe ingresar su <b>apellido</b>.<br>`;
            console.log(`messageError: ${messageError}`);
        }
        if(numero === ""){
            console.log('Número vacío');
            messageError = `${messageError} Debe ingresar su <b>número</b>.<br>`;
            console.log(`messageError: ${messageError}`);
        }
        if(correo === ""){
            console.log('Correo vacío');
            messageError = `${messageError} Debe ingresar su <b>correo</b>.<br>`;
            console.log(`messageError: ${messageError}`);
        }
        if(direccion === ""){
            console.log('Dirección vacía');
            messageError = `${messageError} Debe ingresar su <b>dirección</b>.<br>`;
            console.log(`messageError: ${messageError}`);
        }
        if(sugerencia === ""){
            console.log('Sugerencia vacía');
            messageError = `${messageError} Debe ingresar su <b>sugerencia</b>.<br>`;
            console.log(`messageError: ${messageError}`);
        }

        if(messageError == ""){
            document.getElementById('message-error').classList.add('show');
            document.getElementById('message-error').classList.remove('alert-danger');
            document.getElementById('message-error').classList.add('alert-success');
            document.getElementById('message').innerHTML = 'Sugerencia enviada.';
        }else{
            document.getElementById('message-error').classList.add('show');
            document.getElementById('message-error').classList.remove('alert-success');
            document.getElementById('message-error').classList.add('alert-danger');
            document.getElementById('message').innerHTML = messageError;
        } 

        console.log('messageError: ' + messageError);
    }catch(e){
        console.log("Error", e.stack);
        console.log("Error", e.name);
        console.log("Error", e.message);
    }
}