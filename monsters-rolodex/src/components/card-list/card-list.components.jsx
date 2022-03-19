
// import { Component } from 'react';
// import { Card } from '../card/card.component';
import Card from "../card/card.component";
import './card-list.style.css';

//props get passed in functional components. Since monsters is the first parameter, destructuring can be done
// inside the parameter itself
// nothing else to return therefore implecit return
const CardList = ({monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card monster = { monster}/>
    })}
  </div>
);

export default CardList;

// class CardList extends Component {
//   render () {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card key={monster.id} monster = {monster}/> ;
//         })}
//       </div>
//     );
//   }
// }

