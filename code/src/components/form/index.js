import React from "react"
import "./form.css"

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

 handleSubmit = event => {
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
         <button className="addButton" type="submit">Add</button>
       </form>
     </div>
   )
 }
}

export default Form
