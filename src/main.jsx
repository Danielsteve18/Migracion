import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./components/loading/loading"

const Home = React.lazy(() => import('./view/home/Index')); //Pagina principal
const Login = React.lazy(() => import('./view/auth/AuthForm')); //Pagina de inicio de secion
const Register = React.lazy(() => import('./view/auth/register/register')); //Pagina de registro


const NotFound = React.lazy(() => import('./view/error/NotFound'));// Página para manejar rutas no encontradas

// El componente que renderiza las diferentes páginas
// Cargando los componentes de manera dinámica con React.lazy
const App = () => {
  return (
    <Router>
    <Suspense fallback={
      <Loading />
      }>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Home />} />
        
        {/* Ruta para la página de gestión de login */}
        <Route path="/login-form" element={<Login />} />

        {/* Ruta para la página de gestión de logout */}
        <Route path="/register-form" element={<Register />} />
 
        {/* Ruta para manejar páginas no encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;




