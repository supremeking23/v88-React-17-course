import React,{useState} from "react";



// class UserEvents extends React.Component{

//     constructor(props){
//         super(props);
//         this.state = {term: ""};

//         this.onInputChange = this.onInputChange.bind(this); /* need binding */
//     }

//     onInputChange(event){
//         this.setState({term: event.target.value});
//     }

//     render(){
//         return(
//             <div>
//                 <input type="text" value={this.state.term} onChange={this.onInputChange}/>
//             </div>
//         );
//     }
// }


// function based
function UserEvents(props){
    let [term, setTerm] = useState("");
    let [message, setMessage] = useState("Password must at least be 4 characters");
    
    function onInputChange(event){
        setTerm(event.target.value.toUpperCase());
        if(event.target.value.length >= 4){
            setMessage("");
        }
        else{
            setMessage("Password must at least be 4 characters");
        }
    }
    return(
        <div>
            <input type="text" value={term} onChange={onInputChange} />
            <p>{message}</p>
       </div>
    );


}


export default UserEvents;