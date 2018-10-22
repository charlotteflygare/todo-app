import React from "react"
import Item from "./item"
import Form from "./form"

 class App extends React.Component {
   constructor(props) {
    super(props)
    if (localStorage.getItem("userToDos")) {
      this.state = {
        toDoItem: JSON.parse(localStorage.getItem("userToDos"))
      }
    } else {
      this.state = {
        toDoItem: []
      }
    }
  }

   handleNewItem = (newText) => {
    const toDos = this.state.toDoItem
    toDos.push({
      id: Date.now(),
      done: false,
      text: newText
    })
    localStorage.setItem("userToDos", JSON.stringify(toDos))
     this.setState({
       toDoItem: toDos
    })
  }

   handleChecked = (index) => {
     const toDo = this.state.toDoItem
     toDo[index].done = !toDo[index].done
     localStorage.setItem("userToDos", JSON.stringify(toDo))
     this.setState({
       toDoItem: toDo
    })
  }

  handleRemove = (index) => {
     const toDo = this.state.toDoItem
     toDo.splice(index, 1)
     this.setState({
       toDoItem: toDo
     })
     localStorage.setItem("userToDos", JSON.stringify(toDo))
   }

  render() {
    return (
      <div className="wrapper">
        <div className="todo-container">
          <h1>Things to do</h1>
          <Form onSubmit={this.handleNewItem} />
          {this.state.toDoItem.map((item, index) => (
            <Item
            index={index}
            key={item.id}
            text={item.text}
            done={item.done}
            whenChecked={this.handleChecked}
            removeToDo={this.handleRemove} />
      ))}
      </div>
      </div>

)
}
}

export default App
