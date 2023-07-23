import './SearchBar.css'
import { useState } from "react";

const SearchBar = ({onSubmit}) => {
    const [term , setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        onSubmit(
            // document.querySelector('input').value //dont do this
            term);
    };

    const handleChange = (event) => {
      setTerm(event.target.value);
    };

    //input within form tag ...when we enter 'Enter' submit opeartion is performed with in form
    return (
    <div className='search-bar'>
      <form onSubmit = {handleFormSubmit}>
        <label>Enter search term</label>
        <input value={term} onChange = {handleChange}/>
      </form>
    </div>
    );
};

export default SearchBar ;