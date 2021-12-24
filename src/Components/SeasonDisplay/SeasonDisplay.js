import React from 'react';

export default function SeasonDisplay({season}){
    console.log(season);
    let {latitude, longitude, int_month} = season;
    let display_season_message = "";
    
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
    
    return(
        <div>
            <p>{display_season_message}</p>
        </div>
    );
}
