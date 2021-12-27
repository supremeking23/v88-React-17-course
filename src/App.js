import "./App.scss";
import React,{useState, useEffect} from "react";
import youtube_api from "./api/youtube_api";
import APISearchBox from './Components/APISearchBox/APISearchBox';
import YouTubeList from "./Components/YouTubeList/YouTubeList";
import YouTubeVideoModal from "./Components/YoutubeVideoModal/YouTubeVideoModal";

import {  Modal } from 'semantic-ui-react';
function App() {

  let [open_modal, setOpenModal] = React.useState(false);
  let [video_lists, setVideoList] = React.useState([]);
  let [current_video, setCurrentVideo] = React.useState({});
  let [search_term, setSearchTerm] = React.useState("random");
  
  
  useEffect(()=>{

    fetchVideos();

  },[search_term]);

  async function fetchVideos(){
    try {
      
      let response = await youtube_api.get(`/search`, {params: {
        part: "snippet",
        q: search_term,
        key: "AIzaSyDWaQcuD2wTryvjSa-beWuoM_oyZOMYuY0"
      }});

      console.log(response);
      let youtube_lists = response.data.items.map((youtube_video) => 
      <YouTubeList 
        openVideoModal={openVideoModal} 
        key={youtube_video.id.videoId} 
        snippet={youtube_video.snippet} 
        video_id={youtube_video.id.videoId}
         />);

      setVideoList(youtube_lists);
    } catch (error) {
      
    }
  }

  function openVideoModal(response_to_click){
    setOpenModal(response_to_click.open_modal);
    console.log(response_to_click);

    setCurrentVideo({
      title: response_to_click.title,
      video_id: response_to_click.video_id
    })
  }

  function onFormSubmit(term){
    setSearchTerm(term);
  }

  return (
    <div className="video_search_container">
      {/* search bar */}
      <div className="search_text_block">
        <APISearchBox onFormSubmit={onFormSubmit}/>
      </div>
      {/* onClick={() => setOpen(true)} */}
      <ul>
        {video_lists}
      </ul>

      {/* separate Component */}
      <Modal
        onClose={() => setOpenModal(false)}
        onOpen={() => setOpenModal(true)}
        open={open_modal}
        id="video_modal"
      >
        <Modal.Content>
          <iframe title="Video Player" src={ `https://www.youtube.com/embed/${current_video.video_id}` } />
          <Modal.Description>
            <h2>{current_video.title}</h2>
            <p>
              We've found the following gravatar image associated with your e-mail
              address.
            </p>
          </Modal.Description>
        </Modal.Content>

    </Modal>
    </div>
  );
}

export default App;
