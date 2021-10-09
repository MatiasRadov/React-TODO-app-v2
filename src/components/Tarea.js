import React from 'react'

function Tarea(props) {

    const borrarTarea = () =>{
        props.borrar(props.id);
    }
    return (
        <div>
            <div className="tarea">
                <span>{props.tarea}</span><span>Editar</span><span onClick={borrarTarea}>Borrar</span>
            </div>
            
        </div>
    )
}

export default Tarea
