import closeIcon from '../images/icon-cross.svg';

export default function Todo(props){
    return(
        <div {...props.provided.draggableProps} {...props.provided.dragHandleProps}ref={props.provided.innerRef} className="todo">
            <div className={`todo-task ${props.theme} ${props.completed ? 'completed' : ''}`}>
                {props.todo}
            </div>
            <div className={`todo-check ${props.theme} ${props.completed ? 'completed' : ''}`} onClick={() => props.markAsCompleted(props.id)}>

            </div>
            <div className="add-todo-remove" onClick={() => props.removeTodo(props.id)}>
                <img src={closeIcon} />
            </div>
        </div>
    ); 
}