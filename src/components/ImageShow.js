import "./style.css"

function ImageShow({images}){
    return(
        <div className="images">
            <img  src={images.urls.small} />
        </div>
    )
}


export default ImageShow