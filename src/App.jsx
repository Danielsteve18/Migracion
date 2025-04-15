import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./view/auth/AuthForm";
import ProfesorPage from "./view/profesor/ProfesorPage";
import StudentPage from "./view/student/StudentPage";
import RolesPage from "./view/roles/RolesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/prfesor" element={<ProfesorPage />} />
        <Route path="/pagina_estudiante" element={<StudentPage />} />
        <Route path="/roles" element={<RolesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
