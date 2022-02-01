import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends Component {
  constructor() {
    super(); //calls constructor method on component class
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  //initial display on page, lifecycle method
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())//convert response to JSON
    .then(users => this.setState({monsters: users}))//users from response and set monsters to array
  }

  //arrow function binds scope to where it was defined in the first place
  handleChange= (e)=> {
    this.setState({searchField: e.target.value});
  }

  render() {
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return(
      <div className="App">
        <h1> Monsters Rolodex</h1>
        <SearchBox
          placeholder='search-monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters= {filteredMonsters}/> 
      </div>
    )
  }
}

export default App;
