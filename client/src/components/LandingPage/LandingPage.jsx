import { Link } from 'react-router-dom'; 
//import backgroundImage from '../../assets/background.jpg'; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/*<img src={backgroundImage} alt="Imagen de fondo" className="background-image" />*/}
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

