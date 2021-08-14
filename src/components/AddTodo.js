import '../css/addTodo.css';
import { useRef } from 'react';
export default function AddTodo(props){
    const inputEl = useRef(null);
    return (<>
        <form className="add-todo-form" onSubmit={e => {
            e.preventDefault();
            if(inputEl.current.value === '')
                return;
            props.addTodo(inputEl);
        }}>
            <div className="add-todo-icon" onClick={() => {
                if(inputEl.current.value === '')
                    return;
                props.addTodo(inputEl);
            }}>
            </div>
            <input ref={inputEl} className={`add-todo ${props.theme}`} type="text" name="todo" />
        </form>
    </>)
}