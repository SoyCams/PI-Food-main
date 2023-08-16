import { Link } from 'react-router-dom'; 
import styles from "./LandingPage.module.css"


const LandingPage = () => {
  return (
    <div className={styles.contenedor}>
      <img
        className={styles.imagen}
        src="https://res.cloudinary.com/djyx9jath/image/upload/v1692213568/rickmorty/PI%20FOOD/Texto_del_p%C3%A1rrafo_1_osjbz5.jpg"
        alt="Food"
      />
        <h1>Bienvenido a Cams Food</h1>
        <p>Encuentra la receta perfecta para ti</p>
        <Link to="/home" className={styles.boton}>
          Ingresar </Link>
     
    </div>
  );
};

export default LandingPage;

