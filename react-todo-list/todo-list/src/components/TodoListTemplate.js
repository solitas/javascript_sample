import React from 'react';
import './TodoListTemplate.css'

const TodoListTemplate = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                Todo for today
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section>
                { children }
            </section>
        </main>
    );
};

export default TodoListTemplate;