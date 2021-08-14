import '../css/todosInfo.css';

export default function TodosInfo(props){
    return (<div className={`todos-info ${props.theme}`}>
        <div className="todos-info-items">
            {props.items || 0} items
        </div>
        <nav className="todos-info-nav">
            <ul className="todos-info-nav__ul">
                <li className={`todos-info-nav__ul__li ${props.theme} ${props.collapse === 'all' ? 'active': ''}`} onClick={() => props.changeCollapse('all')} >
                    All
                </li>
                <li className={`todos-info-nav__ul__li ${props.theme} ${props.collapse === 'active' ? 'active': ''}`} onClick={() => props.changeCollapse('active')} >
                    Active
                </li>
                <li className={`todos-info-nav__ul__li ${props.theme} ${props.collapse === 'completed' ? 'active': ''}`} onClick={() => props.changeCollapse('completed')} >
                    Completed
                </li>
            </ul>
        </nav>
        <div className={`todos-info-clear ${props.theme}`} onClick={props.clearTodos}>
            Clear Completed
        </div>
    </div>)
}