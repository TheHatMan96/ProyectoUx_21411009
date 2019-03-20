import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import './App.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { blue } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

//import {map, tail,times,uniq} from 'lodash';
const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  root2: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    backgroundColor : blue
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});
const tileData = [
     {
       img: "https://vignette.wikia.nocookie.net/pokemonreloaded/images/7/77/Pikachu.png/revision/latest?cb=20150923201800&path-prefix=es",
       title: 'Pikachu',
       Type: 'Electric',
     },
     {
      img: "https://vignette.wikia.nocookie.net/pokemonreloaded/images/b/be/Venusaur.png/revision/latest?cb=20150827203729&path-prefix=es",
      title: 'Venusaur',
      Type: 'Grass',
     },
     {
      img: "https://vignette.wikia.nocookie.net/pokemonreloaded/images/9/95/Charizard.png/revision/latest/scale-to-width-down/150?cb=20180905193617&path-prefix=es",
      title: 'Charizard',
      Type: 'Fire',
     },
     {
      img: "https://vignette.wikia.nocookie.net/pokemonreloaded/images/4/41/Blastoise.png/revision/latest/scale-to-width-down/150?cb=20180729224709&path-prefix=es",
      title: 'Blastoise',
      Type: 'Water',
     },
     {
      img: "https://vignette.wikia.nocookie.net/pokemonreloaded/images/b/bf/Machamp.png/revision/latest?cb=20150617171205&path-prefix=es",
      title: 'Machamp',
      Type: 'Fighting',
     },
  ];
class PokemonList extends Component {
  constructor(props){
    super(props);
    
    this.state={open: false}
    
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  handleChange = () => {
    if(this.state.width === 80){
    return;
    }
    this.setState({ 
    width: this.state.width + 10
  });

}

  render() {
    const { classes } = this.props;
    return (
            
    <div className="PokemonList">
      <header className="App-header">
     
      
            <div>
        <Button className="addButton" variant="extendedFab" color="secondary" onClick={this.handleClickOpen}>
          Add Pokemon
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className="dialog-fond"
        >
        <DialogTitle id="alert-dialog-title">{"Add Pokemon"}</DialogTitle>
        <DialogContent>
          <TextField
            id="Pokemon-name"
            label="Pokemon Name"
            margin="normal"
            variant="outlined"
            onChange={this.handleEmail}
          />
          <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Type01</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Bug</MenuItem>
            <MenuItem value={20}>Dark</MenuItem>
            <MenuItem value={30}>Dragon</MenuItem>
            <MenuItem value={40}>Electric</MenuItem>
            <MenuItem value={50}>Fairy</MenuItem>
            <MenuItem value={60}>Fighting</MenuItem>
            <MenuItem value={70}>Fire</MenuItem>
            <MenuItem value={80}>Ghost</MenuItem>
            <MenuItem value={90}>Grass</MenuItem>
            <MenuItem value={70}>Ground</MenuItem>
            <MenuItem value={30}>Ice</MenuItem>
            <MenuItem value={30}>Normal</MenuItem>
            <MenuItem value={30}>Poison</MenuItem>
            <MenuItem value={30}>Psychic</MenuItem>
            <MenuItem value={30}>Rock</MenuItem>
            <MenuItem value={30}>Steel</MenuItem>
            <MenuItem value={30}>Water</MenuItem>

          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Type02</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Bug</MenuItem>
            <MenuItem value={20}>Dark</MenuItem>
            <MenuItem value={30}>Dragon</MenuItem>
            <MenuItem value={40}>Electric</MenuItem>
            <MenuItem value={50}>Fairy</MenuItem>
            <MenuItem value={60}>Fighting</MenuItem>
            <MenuItem value={70}>Fire</MenuItem>
            <MenuItem value={80}>Ghost</MenuItem>
            <MenuItem value={90}>Grass</MenuItem>
            <MenuItem value={70}>Ground</MenuItem>
            <MenuItem value={30}>Ice</MenuItem>
            <MenuItem value={30}>Normal</MenuItem>
            <MenuItem value={30}>Poison</MenuItem>
            <MenuItem value={30}>Psychic</MenuItem>
            <MenuItem value={30}>Rock</MenuItem>
            <MenuItem value={30}>Steel</MenuItem>
            <MenuItem value={30}>Water</MenuItem>
          </Select>
        </FormControl>
          <TextField
            id="Pokemon-Gender"
            label="Gender"
            margin="normal"
            variant="outlined"
            onChange={this.handleEmail}
          />

          <TextField
            id="Pokemon-Height"
            label="Height"
            margin="normal"
            variant="outlined"
            onChange={this.handleEmail}
          />

          <TextField
            id="Pokemon-Weight"
            label="Weight"
            margin="normal"
            variant="outlined"
            onChange={this.handleEmail}
          />

          <TextField
            id="Pokemon-CR"
            label="Catch-Rate"
            margin="normal"
            variant="outlined"
            onChange={this.handleEmail}
          />                    
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Accept
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <h1> </h1>
              <div className={classes.root}>
      <GridList style={{ backgroundColor:'#fffff' }} cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto', backgroundColor:'#fffff' }}>
            <Card>
              <CardContent>
                <Typography>
                <h1 className="LabelTitle" component="div">List Pokemon</h1>
                </Typography>
              </CardContent>
            </Card>          
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>Type: {tile.Type}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div> 

            </header>
          </div>
        
         
          
        
      
      
    );
  }
}

export default withStyles(styles)(PokemonList);
