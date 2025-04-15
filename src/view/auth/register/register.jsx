// src/App.jsx
import { useState } from "react";
import Swal from "sweetalert2"; // Importa SweetAlert2  
import { prueba } from "./JS_prueba";
import Style from "../AuthForm.module.css";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  
  const navigate = useNavigate(); 
  const [registerForm, setRegisterForm] = useState({Name:"", correo: "", contraseña: "" });
 

  const handleLoginChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

 

  const handleLoginSubmit = async (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    try {
      const userCredentials = { nombre: registerForm.Name, correo: registerForm.correo, contraseña: registerForm.contraseña };console.log(userCredentials);
      const response = await prueba(userCredentials);

      Swal.fire({
        title: `Tu nombre es: ${response.Name}`,
        text: `Bienvenido ${response.correo}`,
        icon: "success",
        confirmButtonText: "OK",
      })
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }

    // Limpia el formulario
    setRegisterForm({Name: "", correo: "", contraseña: "" });
  };

 
  
  return (
    <div className={Style.body}>
    <div className={Style.container} >
      <div className={Style.form_container}>
        <form className={Style.form_Auth} onSubmit={handleLoginSubmit}>
          <h1 className={Style.h1Auth}>Registrate</h1>
          <label htmlFor="nombre">Nombre</label>
          <input className={Style.input_form}
            name="Name"
            placeholder="juanitoFree"
            type="text"
            value={registerForm.Name}
            onChange={handleLoginChange}
            required
          />
        <label htmlFor="correo">Correo</label>
          <input className={Style.input_form}
            name="correo"
            placeholder="juanitoFree@gmail.com"
            type="text"
            value={registerForm.correo}
            onChange={handleLoginChange}
            required
          />
          <label htmlFor="contraseña">Contraseña</label>
          <input className={Style.input_form}
            name="contraseña"
            placeholder="*********************"
            type="pasword"
            value={registerForm.contraseña}
            onChange={handleLoginChange}
            required  
          />
          <button className={Style.button_Auth} type="submit">
            Login
          </button>
        </form>
      </div>
      

      <div className={Style.overlay_container}>
          <div className={Style.oeverlay_panel}>
            <div className={Style.text1}>
              <h1>¡Bienvenido a <strong>NEXUS</strong>!</h1>
              <p>Para seguir conectado con nosotros, registrate.</p>
            </div>
            <div className={Style.text1}>
              <h1>¿Ya tienes una cuenta?</h1>
              <p>Da click en el siguiente boton y ¡Disfruta de <strong>NEXUS</strong>!</p>
              </div>
            <button  className={`${Style.ghost} ${Style.button}`} onClick={()=> navigate('/login-form')} >
              Login
            </button>
         
        </div>
      </div>
    </div>
    </div>
  );
}

export default RegisterForm;
