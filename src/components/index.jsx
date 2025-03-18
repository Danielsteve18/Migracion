import { useNavigate } from 'react-router-dom';
import styles from "./index.module.css";

function Index (){
    console.log(styles);
   
    const navigate = useNavigate(); 

    const handleRegistro = () => {
        navigate('/auth-form');  // Esta es la ruta correcta para un componente
    };

    const handleInicio = () => {
        navigate('/auth-form');  // Esta es la ruta correcta para un componente
    };
    
    return(
        
        <>
        <header className={styles.header}>
            <a href="/" className={styles.logo}>Nexus</a>
    
            <nav className={styles.nav}>
                <a href="#">daniel</a>
                <a href="#">steve</a>
                <a href="#">salazar</a>
                <a href="#">sebastian</a>
                <a href="#">Camilo</a>
                <a href="#footer">Contáctanos</a>
                <button className={styles.btn1} id="registro" onClick={handleRegistro}>Registrarse</button>
                <button className={styles.btn1} id="inicio" onClick={handleInicio}>Iniciar sesión</button>
            </nav>
        </header>

        <section className={styles.hero}>
            <div className={styles.hero_overlay}></div>
            <div className={styles.hero_content}>
                <h2>Innovación y Conexión en la Educación</h2>
                <p>Con Nexus, revoluciona el aprendizaje con tecnología avanzada e interacción auténtica.</p>
                <a href="#learn-more" className={`${styles.btn} ${styles.btn_learn_more}`}>Descubre Más</a>
            </div>
        </section>

        <section className={styles.about} id="learn-more">
            <div className={styles.container}>
                <h2>¿Qué es Nexus?</h2>
                <p>Nexus es una plataforma avanzada de aprendizaje en línea, diseñada para transformar la educación a través de herramientas innovadoras y una asistencia impulsada por IA.</p>
                <div className={styles.features}>
                    <div className={styles.features}>
                        <h3>Conexión en Tiempo Real</h3>
                        <p>Accede a clases, recursos y una red de expertos en educación.</p>
                    </div>
                    <div className={styles.features}>
                        <h3>Asistencia Inteligente</h3>
                        <p>IA diseñada para ayudar en la toma de decisiones y apoyar el aprendizaje.</p>
                    </div>
                    <div className={styles.features}>
                        <h3>Recursos Exclusivos</h3>
                        <p>Accede a una biblioteca digital personalizada y materiales premium.</p>
                    </div>
                </div>
            </div>
        </section>

        <footer className={styles.footer} id="footer">
            <div className={styles.container}>
                <p>&copy; 2024 Nexus. Todos los derechos reservados.</p>
            </div>
        </footer>
        </>
    );
};
export default Index;
