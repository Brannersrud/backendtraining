import React, {Component} from 'react';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            pass:'',
            loginStatus:''
        }
        this.handleOnChangeName = this.handleOnChangeName.bind(this);
        this.handleOnChangePass = this.handleOnChangePass.bind(this);
        this.handleOnclick = this.handleOnclick.bind(this);
    }

    handleOnChangeName(e){
        this.setState({name:e.target.value});
    }
    handleOnChangePass(e){
        this.setState({pass:e.target.value});
    }

    //fires the routeshift to the dashboard
    handleOnclick(){
        if(this.state.name === 'Anders' || this.state.pass === 123){
            this.setState({loginStatus:"Thanks for logging in " + this.state.name});
        }else{
            this.setState({loginStatus: "wrong credentials"});
        }
       this.props.history.push("/adminpanel");
    }

    render(){
        return(
            <div class="form-wrapper">           
            <h1 className="form_title">Login</h1>
            <form className="register_form">
                <label>Username</label>
                <input  className="information_field" value={this.state.name} onChange={this.handleOnChangeName} type="text"/>
                <label>Password</label>
                <input  className="information_field" value={this.state.pass} onChange={this.handleOnChangePass} type="password"/>
                <p>{this.state.loginStatus === '' ? '' : this.state.loginStatus}</p>
                <button className="button" onClick={this.handleOnclick}>Login</button>
            </form>
            </div>
        )
    }
}