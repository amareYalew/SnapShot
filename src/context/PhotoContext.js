
import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../api/config";
export const PhotoContext = createContext();

function PhotoContextProvider(props) {
 const [images,setImages]=useState([]);
 const [loading, setLoading] = useState(true);

const runSearch=async(query)=>{

   await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(res=>{
        console.log(res,'rrrrrrrrrrrrrrrrrr')
        setImages(res.data.photos.photo);
        console.log(images,'bbbbbbbbbbbbbb')
        setLoading(false)
    })
    .catch(err=>{
        console.log(err)
    })
} 





  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
    {props.children}
  </PhotoContext.Provider>
  )
}
export default PhotoContextProvider;