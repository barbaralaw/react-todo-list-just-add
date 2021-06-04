// creates Todo that will be exported
const Todo = ({ todo }) => {
    // will return the following html
    return (
        // a div with a h2 that is the given the task
        <div>
            <h2>{todo.item}</h2>
        </div>
    )
}

// export single todo component
export default Todo

