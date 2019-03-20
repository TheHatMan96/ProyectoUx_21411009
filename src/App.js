import React, { Component } from "react";
import "./App.css";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import PokemonList from "./PokemonList";



class App extends Component {
  constructor(props){
    super(props);  
    this.enter = this.enter.bind(this);
    this.state ={
      log:[{userName:'Ash Ketchum',userEmail:'ash@pokemon.com',password:'pokedex'}
          ,{userName:'Misty',userEmail:'misty@pokemon.com',password:'paleta'}],
      password: '',
      userEmail:'',
      Seetrue: false,
      seefalse: false
    };

  }

  handlePassword = (e)=>{
    this.setState({
      password: e.target.value,
    })
    
  }
  handleEmail = (e)=>{
    this.setState({
      userEmail: e.target.value,
    })
    
  }

  enter=()=>{
     if(this.state.userEmail === this.state.log[0].userEmail && this.state.password === this.state.log[0].password){
      this.setState({Seetrue: true})
      console.log("funciona");
     }else if(this.state.userEmail === this.state.log[1].userEmail && this.state.password === this.state.log[1].password){
      this.setState({Seetrue: true})
     }else{
      this.setState({seefalse: true})
     }
  }

  render() {
      return (
      <div >
      {this.state.Seetrue ? 
      <PokemonList /> :
      <form>     
          <div className="App">
            <header className="App-header">
                <img className="PokemonIcon"src= "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="PokemonBg"/>
              
              <Card className="CardClass"> 
                  <CardContent>
                    <h1 className="LabelTitle">LOGIN</h1>
                    <TextField
                      id="outlined-name"
                      label="User"
                      margin="normal"
                      variant="outlined"
                      onChange={this.handleEmail}
                    />
                    <p> </p>
                    <TextField
                      id="outlined-name2"
                      label="Password"
                      margin="normal"
                      variant="outlined"
                      type="password"
                      onChange={this.handlePassword}
                    />
                    
                  </CardContent>
                <CardContent> 
                  <CardActions>
                    <Button className="Button" color="secondary" variant="contained" onClick={this.enter} >Enter</Button>
                  </CardActions>
                  </CardContent>
                  
              </Card>
              
            </header>
          </div>
      </form>
          
        }    
        </div>
      
      
    );
  }
}

export default App;