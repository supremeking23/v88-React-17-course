import React,{useState} from 'react';
import "./APISearchBox.scss";

export default function APISearchBox(props) {
    let [seach_term, setSearchTerm] = useState("");
    function onSubmitSearch(event){
        props.onFormSubmit(seach_term);
        event.preventDefault();
    }

    function onTextChange(event){
        setSearchTerm(event.target.value);
    }
    return (
        <form onSubmit={onSubmitSearch} method="POST">
            <input type="text" onChange={onTextChange} value={seach_term} />
        </form>
    )
}
