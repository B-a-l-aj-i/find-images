
import SearchBar from "./components/SearchBar"
import searchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";
import  "./components/style.css"



function App(){

    let [images,setImages]=useState([])

    let  handleClick= async (term)=>{
        // console.log('search for '+term);
      let res=  await searchImages(term)
      console.log(res);
      setImages(res)
    }

    return(
        <div>
         <header className="heading"><h1>FIND-IMAGES</h1></header>
            <SearchBar onSubmit={handleClick} />
            <ImageList  images={images} />
        </div>
    )
}


export default App