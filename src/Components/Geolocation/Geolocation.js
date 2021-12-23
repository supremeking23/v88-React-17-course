import React,{useState} from 'react';


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
        this.state = {latitude: null, is_error: false, error_message: null};

        window.navigator.geolocation.getCurrentPosition(
            // to update our state object, we call setState
            (position) => this.setState({latitude: position.coords.latitude}),
            (err) => console.log(err) 
        );
    }

    // A required react method when using class-based component
    render(){
        return(
            <div>
                {this.state.is_error === false ? (<p>Hi {this.state.latitude}</p>) : (<p> {this.state.error}</p>)}
                
                <p></p>
            </div>
        );
    }
}

export default Geolocation;

