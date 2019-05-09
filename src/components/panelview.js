import React, {Component} from 'react';

export default class PanelView extends Component{
    constructor(props){
        super(props);

        this.state={
            data:[],
            userToDelete:''
           
        }
        this.handleClick = this.handleClick.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.renderCancelForm = this.renderCancelForm.bind(this);
        this.cancelDeleteRequest = this.cancelDeleteRequest.bind(this);

    }
    handleClick(e){
       this.setState({userToDelete:e.target.id});
           
    }
    cancelDeleteRequest(){
        this.setState({userToDelete:''});
    }
    renderCancelForm(){
        return(
            <div className="cancel_form">
             <p>Are you sure you will delete this user?</p>
             <button className="user_btn" onClick={this.cancelDeleteRequest}>Cancel</button>
             <button className="user_btn" onClick={this.deleteUser}>Yes</button>
             </div>
        );
    }
    deleteUser(){
       const requestOption = {
            method: 'DELETE'
        }
        fetch("/api/deleteUser/"+this.state.userToDelete,requestOption)
        .then(()=>{
            console.log("user deleted");
        }).catch((err)=>{
          console.log(err);
        })
        window.location.reload();
    }
    
    componentDidMount() {
        // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.setState({data:res}))
        .catch(err => console.log(err));
    
    }
      // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
      const response = await fetch('/api/getObj');
      const body = await response.json();
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };

      render() {
        return (
          <div className="userpanel_wrapper">
            <section className="top_container">
                <h1 className="paneltitle">Welcome to the user-overview</h1>
                <p>feel free to delete any user you would like</p>
            </section>
            <section className="user_container">
            <h3 className="panelview_title">Your users</h3>
            {this.state.data.map(user => (
                <div className="each_user" key={user.id}>
                <li className="user">{user.firstname + " " + user.lastname}</li>
                <button className="user_btn" onClick={this.handleClick} id={user.id}>Delete</button> 
                <hr/>
                </div>
            ))}
            {this.state.userToDelete === '' ? '' : this.renderCancelForm()}
            </section>
          </div>
        
        )
      }
}