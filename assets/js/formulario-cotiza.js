console.log('LOAD LIB FORMULARIO-COTIZA');

function save(){
    try{
        let messageError = "";
        let calle = document.getElementById('calle').value;
        console.log('Calle: ' + calle);
        let numero = document.getElementById('numero').value;
        console.log('Número: ' + numero);

        if(calle == ""){
            console.log('calle vacía');
            messageError = `${messageError} Debe ingresar su <b>calle</b>.<br>`;
            console.log(`messageError: ${messageError}`);
        }
        if(numero === ""){
            console.log('Número vacío');
            messageError = `${messageError} Debe ingresar su <b>número</b>.<br>`;
            console.log(`messageError: ${messageError}`);
        }

        if(messageError == ""){
            document.getElementById('message-error').classList.add('show');
            document.getElementById('message-error').classList.remove('alert-danger');
            document.getElementById('message-error').classList.add('alert-success');
            document.getElementById('message').innerHTML = 'Cotización hecha.';
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