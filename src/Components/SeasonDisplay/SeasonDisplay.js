import React from 'react';
import "./SeasonDisplay.scss";


export default function SeasonDisplay({season}){
    console.log(season);
    let {latitude, longitude, int_month, error_message} = season;
    let display_season_message = "";
    let what_to_render = null;

    console.log(`sdadas ${error_message}`);
 
    
    if(latitude > 0){
        // 3 to 8
        if(int_month >=3 && int_month <= 8){
            display_season_message += "Summer for ";
        }
        else{
            display_season_message += "Winter for ";
        }

        display_season_message += "Northern Hemisphere";
    }
    else{

        if(int_month >=3 && int_month <= 8){
            display_season_message += "Summer for ";
        }
        else{
            display_season_message += "Winter for ";
        }

        display_season_message += "Southern Hemisphere";
    }

    // what to render
    if(display_season_message.toLowerCase().includes("winter")){
        what_to_render = () => {
            return(
                <div className="season_display_container winter_background">
                    <p>{display_season_message}</p>
                    <i className="snowflake icon"></i>
                </div>
            );
        }
    }
    else{
        what_to_render = () => {
            return(
                <div className="season_display_container summer_background">
                    <p>{display_season_message}</p>
                    <i className="sun icon"></i>
                </div>
            );
        }
        
    }
    
    return(
        <>
            <h2>sd {error_message !== null ? what_to_render() : "Loading"}</h2>
            <p>{season.error_message}</p>
        </>
    );
}

SeasonDisplay.defaultProps = {
    error_message: "Error............",
}