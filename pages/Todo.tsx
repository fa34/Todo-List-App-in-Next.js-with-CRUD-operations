import { useState } from "react"

const todo = () => {
const [todo , settodo] = useState("")

  const [todos , settodos] =useState([
    {text: "Update For Physics",
completed: false},
{ text:"Learn Next.js",
completed:false} ,
{ text:"Learn Fiverr",
completed:false} ,
{text:"Learn Graphical Presentation",
completed:false
}])
const onClickHandler=(comingElm : any) => {
  const newtodos=todos.map((todos) =>{
    if(todos.text==comingElm.text){
      todos.completed= ! todos.completed
    }
    return todos
  })
  
  settodos(newtodos)
};
const addone=() => {
  const newtodo = {text : todo , completed: false }
  const newtodos = [...todos, newtodo]
  settodos(newtodos)
  settodo("")




}
const deletetodo=(delelm : any) =>{
  const newtodos= todos.filter((todo) => {
    if(todo.text== delelm.text){
      return false
    } return true ;
  })
  settodos(newtodos)
}

  return (
    <>
    <div>ToDo</div>
    <input placeholder="Enter todo here" value={todo}  onChange={(e) => {settodo(e.target.value)}} />
  
    <button onClick={addone}>Add</button>
    <ul>
      {
        todos.map((elm) => {
          return <li style={{color: elm.completed ? "goldenrod" : "Red",
          listStyle: "none"}} key={elm.text}>
            {elm.text}
            <input type="checkbox" checked={elm.completed} onChange={() => {onClickHandler(elm)}}/>
            <button onClick={() => {deletetodo(elm)}} style={{color: "yellowgreen" , display: "block"}}>Delete</button>
          </li>
        })
      }
    </ul>
    </>
  )
    }

export default todo