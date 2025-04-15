
export const prueba = async ({nombre, correo, contraseña}) => {
    const Name= nombre;
    const email = correo;
    const password = contraseña;

    try {
        console.log(Name, email, password)

    } 
    catch (error) {
        const errorCode = error.code;
        if (errorCode === 'auth/wrong-password') {
            alert('Contraseña incorrecta');
        } else if (errorCode === 'auth/user-not-found') {
            alert('Usuario no encontrado');
        } else if (errorCode === 'auth/invalid-email') {
            alert('Correo no es válido');
        } else {
            alert('Error: ' + error.message);
        }
    }
};