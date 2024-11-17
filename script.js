document.getElementById('registro-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene la recarga de la página al enviar el formulario

    const formData = new FormData(this);

    const usuarioDto = {
        Nombre: formData.get('nombre'), // Usa mayúsculas para que coincida con el DTO
        Apellidos: formData.get('apellido'),
        CorreoElectronico: formData.get('correo'),
        Password: formData.get('contrasena'), // Cambia a "Password" como espera el backend
        NombreEmpresa: formData.get('nombreEmpresa'),
        Cargo: formData.get('cargo')
    };

    console.log('enviar ', usuarioDto )

    // Configuración de la solicitud Fetch
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( usuarioDto ),
        mode: 'cors' 
    };

    // Enviar los datos al backend
    fetch('http://adrian-test.somee.com/api/Usuario/nuevo/administrador', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Registro exitoso');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al registrar. Intenta nuevamente.');
        });
});
