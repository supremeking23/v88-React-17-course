import "./YouTubeList.scss";
import React from 'react';

export default function YouTubeList(props){
    let {video_id, snippet, openVideoModal} = props;
    function youtube_list_click(event){
        console.log(event.target);
        openVideoModal({
            open_modal: true,
            video_id: event.target.closest(".youtube_list").getAttribute("data-video_id"),
            title: event.target.closest(".youtube_list").getAttribute("data-video_title"),
        });
    }
    return(
        <li className="youtube_list" onClick={youtube_list_click} data-video_id={video_id} data-video_title={snippet.title}>
            <img src={snippet.thumbnails.medium.url} alt={snippet.title}/>  
            <div className="video_details">
                <h2>{snippet.title}</h2>
                <h3>{snippet.channelTitle}</h3>
                <p>{snippet.description}</p>
            </div>    
        </li>
    );
}


// https://unsplash.com/oauth/applications/286196
// https://developers.google.com/youtube/v3/docs/search/list?apix_params=%7B%22part%22%3A%5B%22snippet%22%5D%2C%22q%22%3A%22hamburger%22%7D&apix=true