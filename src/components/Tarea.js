import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import TareaForm from './TareaForm';

function Tarea(props) {
    
    const borrarTarea = () =>{
        props.borrar(props.id);
    }
    return (
            <>
                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    <span className="span">
                        {props.tarea}
                    </span>
                    <span href="#">
                        <i
                            onClick={borrarTarea}
                            className="far fa-trash-alt">
                        </i>
                    </span>
                </li>
            </>
    )
}

export default Tarea