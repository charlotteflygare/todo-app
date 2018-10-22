import React from "react"
import Item from "../item"
import App from "../app"
import "./newitem.css"

class Form extends React.Component {
   constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }
   handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
   handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.text)
  }

   render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange} />
          <button className="addButton">add</button>
        </form>
      </div>
    )
  }
 }
 export default Form
