import React, {Component} from 'react'
class CreateItem extends Component{
  state={
  value:''
  }

handleChange=(query)=>{
this.setState(()=>({
value:query.trim()
}))
}

sendPreventItem =(event)=>{
	event.preventDefault();
	this.props.addItemNew(this.state.value)
}

render(){
  const {value} = this.state
  
return(
  <form onSubmit={this.sendPreventItem}>

          <input
            type="text"
            placeholder="Enter New Item"
            value={value}
            onChange={(event)=>this.handleChange(event.target.value)}
          />
          <button disabled={value == ''}>Add</button>
        </form>
)}
}
export default CreateItem
