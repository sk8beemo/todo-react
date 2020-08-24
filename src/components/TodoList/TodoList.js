import React from "react";

import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';
import todosData from '../../data/data';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            return {
              ...prevState, 
              todos: prevState.todos.map(item => {
                return item.id === id ? {...item, completed: !item.completed} : item
            })}
          })
    }

    render() {
        const ItemsData = this.state.todos.map((item)=> <TodoItem key={item.id} item={item} handleChange={this.handleChange} />);
    
        return (
            <div className="todo-list">
                {ItemsData}
            </div>
        )
    }
}

export default TodoList;