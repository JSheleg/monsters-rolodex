// import React, {Component} from 'react';
import { useState , useEffect } from 'react';
// import { CardList } from './components/card-list/card-list.components';
import CardList from "./components/card-list/card-list.components"
import SearchBox  from './components/search-box/search-box.component';
import './App.css';

//functional component => run from top to bottom with what is return() being the UI that the function returns
//takes arguments that are the props of component and returns jsx
const App = () => {

  //useState() pass in the inital value of search field = " "
  //replicate set state for searchField
  console.log("RENDER");
  //searchField value is a string since that was what was passed to the useState() hook: value: " ";
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  //initailize newState for monsters since it was found in the state of class component
  //initial value is an empty []
  const [monsters, setMonsters] = useState([]);
  //initial state based on monsters state
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // ------------ useEffect ---------
  //takes 2 values, call back function and an array of dependencies
  // 1st argument: code or effect that we want to happen inside functional component
  //2nd argument: contains different dependencies most likely state values such as searchField or monsters or prop values (arguments that get passed into functional component)
  // when [] values change is when callback function will be run
  useEffect(() => {
    console.log('effect fired');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())//convert response to JSON
    .then((users) => setMonsters(users));
  }, [])// nothing needed in [] as we don't want to trigger after the first time the app mounts

  // run filter monster
  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newfilteredMonsters)
    //filter through monsters when monsters array changes or searchField changes
  }, [monsters, searchField]);


 
  

  const onSearchChange = (event) => {

    //call setter function provided by useState and pass in searchFieldString
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);

    //above replaces this.setState function
    // this.setState(() => {
    //   return { searchField};
    // });
  }

  return(
    <div className="App">
       <h1 className='app-title'> Monsters Rolodex</h1>
        <SearchBox
          className ="monsters-search-box"
          placeholder='search-monsters'
          handleChange={onSearchChange}
        />
        <CardList monsters= {filteredMonsters}/> 
    </div>
  )
}

// //class components
// class App extends Component {
//   //constructor unique to class component
//   constructor() {
//     super(); //calls constructor method on component class

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   //initial display on page, lifecycle method, unique to class component
//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())//convert response to JSON
//     .then(users => this.setState({monsters: users}))//users from response and set monsters to array
//   }

//   //arrow function binds scope to where it was defined in the first place
//   onSearchChange= (e)=> {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState( () => {
//        return{ searchField}
//});
//   }

//   //render() unique to class component
//   render() {
//     const { monsters, searchField} = this.state;
//     const filteredMonsters = monsters.filter(monster =>
//       monster.name.toLowerCase().includes(searchField.toLowerCase())
//       )
//     return(
//       <div className="App">
//        <h1 className='app-title'> Monsters Rolodex</h1>
//         <SearchBox
//           className ="monsters-search-box"
//           placeholder='search-monsters'
//           handleChange={this.handleChange}
//         />
//         <CardList monsters= {filteredMonsters}/> 
//       </div>
//     )
//   }
// }

export default App;
