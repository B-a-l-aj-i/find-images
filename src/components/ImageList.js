import ImageShow from "./ImageShow"
import "./style.css"

function ImageList({images}){
    const renderImages=images.map((img)=>{
        return <ImageShow key={img.id} images={img}  />
    })
    return(
        <div className="renderImages">{renderImages}</div>
    )
}


export default ImageList