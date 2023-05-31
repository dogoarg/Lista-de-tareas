import './App.css';
import dogo from './Imagenes/dogo.jpg'
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (

    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
        <img src={dogo} className='logo'/>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas/>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
