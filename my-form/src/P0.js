import React from "react"
import fetchPopularRepos from './Api'
export default class P0 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectedLanguage: "All",
            repos : []
        }
    }
    componentDidMount(){
        this.updateLanguage(this.state.selectedLanguage)
    }
   
    updateLanguage = (input)=>{
        console.log("inp", input)
        this.setState({
            selectedLanguage : input
        })
        fetchPopularRepos(input).then((res)=>{
            console.log(res)
            this.setState({
                repos: res
            })
        })
    }
    render(){
        const languages = ["All", "Python", "Java", "JavaScript"]
        const {selectedLanguage} = this.state
        return(
            <div>
                <div style = {{display : "flex", justifyContent:'space-around'}} >
                    {languages.map((lang)=>(
                    <h2 
                    key={lang}
                     style={ selectedLanguage === lang ? {color : 'red'} : null}
                    onClick = {()=>this.updateLanguage(lang)}>
                        {lang}
                    </h2>
                    
                    ))}
                </div>
                <div style = {{gridTemplateColumns: "repeat(3, 1fr)" , display : 'grid', gridGap:'1rem'}}>
                    {this.state.repos.map((repo)=>(
                        <h2 style =  {{border: "2px solid black", alignItems: "center"}}
                        key = {repo.id}>
                            <img src = {repo.owner.avatar_url} width= "250px" height = "300px"/>
                            <br/>
                            {repo.name}
                        </h2>
                    ))}
                </div>
            </div>
        )
    }
}