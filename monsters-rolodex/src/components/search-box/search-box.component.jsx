import {Component} from "react";
import './search-box.style.css';

//functional components have no acccess to state or lifecycle methods as they don't have class
//perfect for just rendering HTML
//implicit return
const SearchBox = ({className, placeholder,handleChange}) => (
    
    <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
  
);

export default SearchBox;

// class SearchBox extends Component {
//     render() {
//         return (
//             <input
//                 className={`search-box ${this.props.className}`}
//                 type="search"
//                 placeholder={this.props.placeholder}
//                 onChange={this.props.handleChange}
//             />
//         )
//     }
// }

// export default SearchBox;




