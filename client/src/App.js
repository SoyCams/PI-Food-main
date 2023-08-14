import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Ruta de la página de inicio */}
          <Route exact path="/" component={LandingPage} />

          {/* Otras rutas de la aplicación */}
          {/* ... Agrega aquí las rutas de las demás vistas */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
