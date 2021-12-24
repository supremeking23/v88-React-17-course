import React,{useState} from 'react'

export default function SearchBar(props) {

    const [term, setTerm] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        props.onSearchSubmit(term);
    }
    const onInputChange = (event) => {
        setTerm(event.target.value);
        
    }



    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" value={term} onChange={onInputChange} />
        </form>
    )
}
