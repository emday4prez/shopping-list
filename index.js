function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'chicken',
      isCompleted: false,
    },
    {
      text: 'rice',
      isCompleted: true,
    },
    {
      text: 'brazil nuts',
      isCompleted: false,
    }        
  ])


    const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = e => {
    var index = Number(e.target.id);
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="container">
    <h1 className='title'></h1>
      {todos.map((item, i) => <div className="item" onClick={removeTodo} key={i} id={i}>{item.text}</div>)}
       <TodoForm addTodo={addTodo} />
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);