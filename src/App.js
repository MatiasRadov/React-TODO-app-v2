import React, {useState} from 'react';
import TareaForm from './components/TareaForm';
import Tarea from './components/Tarea';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [listaTareas, setListaTareas] = useState([]);

  const nuevaTarea = (tarea) =>{
    setListaTareas([tarea, ...listaTareas]);
  }

  const borrar = (id) =>{
    const listaFiltrada = listaTareas.filter((e,index)=> index !== id);
    setListaTareas(listaFiltrada);
  }
  return (
    <div className="container justify-content-center">
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <h1>todos</h1>
          <TareaForm 
            nuevaTarea={nuevaTarea}
          />
          {
            listaTareas.map((e,index) => <Tarea 
                                  tarea={e}
                                  borrar={borrar}
                                  id={index}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
