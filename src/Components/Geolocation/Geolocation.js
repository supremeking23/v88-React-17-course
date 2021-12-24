import React,{useState} from 'react';
import SeasonDisplay from '../SeasonDisplay/SeasonDisplay';

// function based
// export default function Geolocation(){
//     /* using react hooks */
//     let [position, setPosition] = useState();

//     window.navigator.geolocation.getCurrentPosition(
//         (position) => setPosition(position),
//         (err) => console.log(err) 
//     );

//     return(
//         <div>
//             Latitude : {position.coords.latitude}
//         </div>
//     );
// }

// class based
class Geolocation extends React.Component{
    // Just a JS method, not specific to react.
    // It's going to be automatically called with the props object
    constructor(props){
        // REQUIRED when using constructor
        super(props);
        // This is our state object
        /* This will eventually contan some different properties that are relevan to our app*/
        this.state = {latitude: null, longitude: null, month_int: null, is_error: false, error_message: null};
    }

    componentDidMount(){
       
        let get_current_month = new Date().getMonth(); /* starts with 0 = january and so on*/

        window.navigator.geolocation.getCurrentPosition(
            // to update our state object, we call setState
            (position) => this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude}),
            (err) => this.setState({error_message: err.message})
        );
        
        this.setState({...this.state ,month_int: get_current_month}); // add all key value pair when we set the state again

        console.log("Component rendered!");
    }

    componentDidUpdate(){
        console.log("Component updated!");
    }

    // A required react method when using class-based component
    render(){
        return(
            <div>
                {this.state.is_error === false ? (<p>Hi {this.state.latitude}</p>) : (<p> {this.state.error}</p>)}
                <SeasonDisplay season={this.state}/>
            </div>
        );
    }
}

export default Geolocation;

