import React from "react"
import App from "../app"
import Form from "../form"
import "./item.css"


class Item extends React.Component {

   handleChangeOnCheck = () => {
    this.props.whenChecked(this.props.index)
  }


  handleRemoveToDo = (e) => {
  e.preventDefault()
  this.props.removeToDo(this.props.index)
}

   render() {
    return (
      <div className="list-container">
        <form>
          <label>
          <div className="list-form">
          <input
           type="checkbox"
           className="task-checkbox"
           checked={this.props.done}
           onChange={this.handleChangeOnCheck} />

             <span className="checkbox" />
             {this.props.text}
             </div>

             <button className="removeButton" onClick={this.handleRemoveToDo}><p>—</p></button>

          </label>
        </form>
      </div>
    )
  }
 }
 export default Item
