// import todo element from todo file
import Todo from './Todo'

// creates list of todo items to be exported, takes object containing todos as parameter
const List = ({ todos }) => {
    // will return the following
    return (
        // each todo in the todos object is passed to the Todo component file to create a component for each
        <div>
          {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} />
          )}  
        </div>
    )
}

// exports list component that contains however many Todo components
export default List

