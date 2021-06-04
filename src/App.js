// imports useState from react
import { useState } from 'react'
// imports header component from header file
import Header from "./components/Header";
// imports list component from list file
import List from "./components/List"
// imports addTodo component from list file
import AddTodo from "./components/AddTodo"

//App is main component in react which acts as a container for all other compnenents. App will be loaded into an html element
//rendered in the browser
function App() {
  //array destructing and we are using the useState() hook
  //returning the value of the useState() hook to get a variable that contains the state array and a mthod for updating the state. 
  //You can’t update the array directly without using the method returned from usesState() which is the setTodos
  //todos is our actual state and setTodos allows us to modify the useState. The initial state is what the state
  //starts with . This passes into the List component.
  
  // creating array using useState hook
  const [todos, setTodos] = useState([
    // object 
    {
      // id is 1 item is drink water
      id: 1,
      item: "Drink Water",
    },
    // 2nd object in array
    {
      // id is 2 item is make healthy dinner
      id: 2,
      item: "Make Healthy Dinner",
    },
    // 3rd object in array
    {
      // id is 3 item exercise
      id: 3,
      item: "Exercise",
    },
  ]);

  // creating addTodo function expression
  const addTodo = (todo) => {
    // creating a random ID number between 1 and 100000
    const id = Math.ceil(Math.random()*100000)
    // creating a newTodo object with the random ID and the info imported from list
    const newTodo = {id, ...todo}
    // calling setTodos function with the previous todos and newTodo
    setTodos([...todos, newTodo])
  }

  // will return the following html
  return (
    // div with class name container
    <div className="container">
      // imported header component with added prop title todo list
      <Header title="Todo List" />
      // when addTodo form is submitted, it calls addTodo function on line 42
      <AddTodo onAdd={addTodo} />
      // lists all the todos in a div
      <List todos={todos}/>
    </div>
  );
}

// exports single component app, which includes the imported components
export default App;
