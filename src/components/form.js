import React,{Component} from 'react';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
                fname:'',
                lname:''
     
        }
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handlebuttonclick = this.handlebuttonclick.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleChangeText(event){
        this.setState({lname:event.target.value})
   
    }
    handleNameChange(event){
        this.setState({fname:event.target.value});
    }

    //fires the event to database
    handlebuttonclick(e){
        fetch("/api/myAction", {
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((response) => response.json)
        .then((result) => {
            console.log(result);
        })
    }

    render(){
        return(
        <div className="form-wrapper">
        <h1 className="form_title">Register</h1>
        <h2 className="form_subtitle">We are totally not assholes, we promise</h2>
            <form className="register_form">
                <label>First name</label>
                <input value={this.state.fname} onChange={this.handleNameChange} type="text" className="information_field"/>
                <label>Last name</label>
                <input onChange={this.handleChangeText} value={this.state.lname} type="text" className="information_field"/>
                <button className="button" disabled={!this.state.fname || !this.state.lname} onClick={this.handlebuttonclick}>submit</button>
            </form>
            </div>
        );
    }
}