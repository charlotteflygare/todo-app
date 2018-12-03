import React from "react"
import "./item.css"

class Item extends React.Component {

  handleChangeOnCheck = () => {
    this.props.whenChecked(this.props.index)
  }

  handleRemoveToDo = e => {
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
              <p>{this.props.text}</p>
            </div>
            <button className="removeButton" type="submit" onClick={this.handleRemoveToDo}><p>Remove</p></button>
          </label>
        </form>
      </div>
    )
  }
}

export default Item
