const form = document.getElementById('form-validate');
let formIsValid = false;

function validateFieldNumber (campoA, campoB) {
    return campoB > campoA;
}

function reloadPag() {
    window.location.reload();
} 

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const campoA = parseInt(document.getElementById('field-A').value);
    const campoB = parseInt(document.getElementById('field-B').value);
    const mensagemSucesso = '<b>#VALIDADO#</b> ➜ valor do campo <b>"B"</b>, é superior ao valor do campo <b>"A"</b>';
    
    formIsValid = validateFieldNumber(campoA, campoB);    
    if (formIsValid) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        document.querySelector('.success-message').innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
        
    } else {
        document.querySelector('.error-message').style.display = 'block';
    }    
})
