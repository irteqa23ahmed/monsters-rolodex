import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.components';
import { Search } from './components/search-box/search-box.components';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField: ''
    }
  }
  
  componentDidMount() {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users => this.setState({monsters: users}));

  }
  render(){

    const {monsters, searchField} = this.state;
    const filteredMons = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      ) 

    return (
      <div className="App">
      <h1> Monsters Rolodex </h1> 
      <Search placeholder='Search Monster' 
      handleChange={e => this.setState({searchField: e.target.value})} />
      <CardList monsters={filteredMons}/>
      </div>
    );
  }
};

export default App;
