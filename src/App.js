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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <h1>todos</h1>
          <TareaForm 
            nuevaTarea={nuevaTarea}
          />
        <ul className="list-group pb-3">
          {
            listaTareas.map((e,index) => 
 
                                  <Tarea 
                                    tarea={e}
                                    borrar={borrar}
                                    id={index}/>)
          }
            <li className="list-group-item counter" id="task-counter">
              {listaTareas.length}{" "}
              {listaTareas.length > 1
                  ? "items left"
                  : listaTareas.length === 1
                  ? "item left"
                  : "tasks, add a task!"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
