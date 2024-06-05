const form = document.querySelector ('form') 



form.addEventListener  ('submit' , (e) =>  {
        
    if ( !validarForm () )      
           {
        console.log ('El formulario no es correcto. Por favor corrije los errores');
        Swal.fire("Debes completar ambos campos para ingresar!");
        
        

        e.preventDefault();
           } else {
           
         console.log('El formulario es válido. Enviar datos...');
         e.preventDefault();
         Swal.fire({
            position: "center",
            icon: "success",
            title: "Felicitaciones! Pronto podrás ingresar a tu cuenta!",
            showConfirmButton: false,
            timer: 3000
          });
         
    }       
});

function validarForm() {

    let esvalido = true;
    esvalido = validarcampo ('email' ) && esvalido;
    esvalido = validarcampo ('password' ) && esvalido;
    return esvalido;

}

const validarcampo = campo => {

    const field = document.getElementById (campo);
    const value = field.value
    
    if (value === '') {
       
        return false;
       
    } else {

        return true;
    }
}
