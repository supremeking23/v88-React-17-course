import React,{useState, useEffect} from 'react';
import "./ImageGallery.scss";
import unsplash_api from '../../api/unsplash_api';
import APISearchBox from '../APISearchBox/APISearchBox';

export default function ImageGallery() {
    let [images,setImages] = useState([]);
    let [search_term, setSearchTerm] = useState("random");
    let [is_processing, setIsProcessing] = useState(0);

    // useEffect(()=>{
    //     fetchImages();
    // },[]);

    useEffect(()=>{
        getNewDataOnSubmit();
    },[is_processing]);

    // async function fetchImages(){
    //     try {
    //         let response = await unsplash_api.get("/photos/");
    //         let image_detail = response.data.map((image) => <li key={image.id}> <img src = {image.urls.thumb} alt ={image.alt_description}/></li>);

    //         setImages(image_detail);

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    async function getNewDataOnSubmit(){
        try {
            let response = await unsplash_api.get(`/search/photos?query=${search_term}`);

            let image_detail = response.data.results.map((image) => <li key={image.id}> <img src = {image.urls.thumb} alt ={image.description}/></li>);
            
            setIsProcessing(0);
            setImages(image_detail);
        } catch (error) {
            console.log(error);
        }
    }
    
    async function onFormSubmit(response){
        try {
            setSearchTerm(response); //response from APISearchBox
            setIsProcessing(1);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="image_gallery_container">
            {/* search bar */}
            <APISearchBox onFormSubmit={onFormSubmit}/>
            {/* images */}
            <ul>
                {images}
            </ul>
        </div>
    )
}
