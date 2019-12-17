import React from 'react'
import axios from 'axios'


class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : '',
            avatar : "",
            name : ""
        }
    }

   handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault()
        axios.get(`https://api.github.com/users/${this.state.username}`)
        .then((res)=> this.setState({
            avatar : res.data.avatar_url,
            name: res.data.login
        }))
        .catch((err)=> console.log(err))
    }

    // componentDidMount(){
       
        
    // }

    render(){
        
        return(
            <div>
                <form onSubmit = {this.handleSubmit} >
                    <input placeholder = "Enter name" 
                        name = "username"
                        value = {this.state.username}
                        onChange = {this.handleChange}
                        />
                        <button type = "submit">Submit</button>
                </form>
                <hr/>
                <h2> 
                    Avatar : 
                    <img src =
                    {this.state.avatar}></img>
                </h2>
                <h2>
                    Name : {this.state.name}
                </h2>
            </div>

        )
    }
}



export default Form