import React from "react"

export default class P0 extends React.Component{
    constructor(props){
        super(props)
        // state = {
        //     selectedLanguage: "All",
        //     // repos = []
        // }
    }
    // componentDidMount()
   
    // updateLanguage = (input)=>{
    //     console.log("inp", input)
    //     this.setState({
    //         selectedLanguage : input
    //     })
    // }
    render(){
        const languages = ["All", "Python", "Java", "JavaScript"]
        // const {selectedLanguage} = this.state
        return(
            <div>
                <div >
                    {languages.map((lang)=>(
                    <h2>{lang}</h2>
                    // onClick = {this.updateLanguage(lang)}
                    ))}
                </div>
            </div>
        )
    }
}