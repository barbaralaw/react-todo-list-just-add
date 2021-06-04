// imports useState from react
import { useState } from 'react'

// create AddTodo app that will be exported, takes new todo info from app.js function addTodo
const AddTodo = ({ onAdd }) => { 
    
    const [item, setItem] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({item})

        setItem('')
    }

    // will return the following
    return (
        // a form that allows user to submit a new todo item
        <form onSubmit={onSubmit}>
            <label>Add Todo:</label>
            <input 
                type="text" 
                placeholder="Todo Item"
                value={item}
                onChange={ (e) => setItem(e.target.value)}
            /> 
            <input type="submit" value="Add Todo" />
        </form>
    )
}

export default AddTodo
