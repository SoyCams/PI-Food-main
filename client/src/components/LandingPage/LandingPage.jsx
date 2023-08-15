import { Link } from 'react-router-dom'; 
import styles from "./LandingPage.module.css"


const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <div className="content">
        <h1>Bienvenido a nuestra aplicación de recetas</h1>
        <p>Explora recetas y encuentra la perfecta para ti</p>
        <Link to="/home">
          <button className="enter-button">Ingresar</button> </Link>
      </div>
    </div>
  );
};

export default LandingPage;

