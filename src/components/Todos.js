import Todo from './Todo';
import TodosInfo from './TodosInfo';
import '../css/todos.css';
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function Todos(props){
    const [collapse, setCollapse] = useState('all');
    const renderTodos = () => {
        if (collapse === 'all')
            return props.todos;
        else if (collapse === 'active')
            return props.todos.filter(todo => !todo.completed)
        else
            return props.todos.filter(todo => todo.completed)
    }
    
    const changeCollapse = newCollapse => setCollapse(newCollapse);

    return(
        <DragDropContext onDragEnd={props.handleDragEnd}>
            <div className={`todos ${props.theme}`}>
                <Droppable droppableId="todos">
                {
                    provided => (<div {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                renderTodos().map((todo, index) => (
                                    <Draggable key={todo.id} draggableId={`${todo.id}`} index={index}>
                                        {
                                            provided => (
                                                <Todo provided={provided} id={todo.id} todo={todo.todo} completed={todo.completed} theme={props.theme} removeTodo={props.removeTodo} markAsCompleted={props.markAsCompleted} /> 
                                            )
                                        }
                                    </Draggable>))  
                            }
                    {provided.placeholder}
                    </div>)
                }  
                </Droppable>
                <TodosInfo collapse={collapse} theme={props.theme} clearTodos={props.clearTodos} changeCollapse={changeCollapse} /> 
            </div>
        </DragDropContext>
    );
}