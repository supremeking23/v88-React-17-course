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
function UserEvents(){
    let [term, setTerm] = useState("");
    function onInputChange(event){
        setTerm(event.target.value.toUpperCase());
    }
    return(
        <div>
            <input type="text" value={term} onChange={onInputChange} />
       </div>
    );
}

export default UserEvents;