import { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm(){

    const {
        setOpenModal,
        addTodo,
    } = useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault(); 
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    
    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        const valor = event.target.value;
        setNewTodoValue(valor);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder="leer mi libro"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button-cancel"
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Agregar</button>
            </div>
        </form>
    )
}

export {TodoForm};