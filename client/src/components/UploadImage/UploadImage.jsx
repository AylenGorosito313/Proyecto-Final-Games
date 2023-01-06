import React, { useState } from "react";

export default function UploadImage(props){
    const [image, setImage] = useState([]);
    // const [loading, setLoading] = useState(false);

    // const handleRemoveImg = (imgObj) => {

    // };

    function handleOpenWidget(){
        var myWidget = window.cloudinary.createUploadWidget(
            { 
            cloudName : 'dbgzbsigy' , 
            uploadPreset : 'andromedaPrueba' }, 
            (error, result) => { 
                if (!error && result && result.event === "success"){ 
                    console.log( ' ¡Listo! Aquí está la información de la imagen: ' , result.info);   
                    // setImage(prev => [...prev, {url: result.info.url, public_id: result.info.public_id, key: result.info.public_id}])
                    setImage(prev => [{url: result.info.url, public_id: result.info.public_id, key: result.info.public_id}])
                }   
            } 
        ); 
        myWidget.open();
    };

    return(
        <div>
            <h1>Upload Image</h1>
            <div>
                <div className="images-preview-container">
                    {
                        image?.map(img =>(
                            <div>
                                <img key={img.public_id} src={img.url} alt="UploadImage" width='200px' height='300px'/>
                            </div>
                        ))
                    }
                </div>
                <button className="cloudinary-button"  id='upload-widget' onClick={handleOpenWidget}>
                    Upload Image
                </button>
                
            </div>
        </div>
    );
};