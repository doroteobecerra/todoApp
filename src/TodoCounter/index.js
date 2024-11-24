import { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {

  const {total, completed} = useContext(TodoContext);

  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
