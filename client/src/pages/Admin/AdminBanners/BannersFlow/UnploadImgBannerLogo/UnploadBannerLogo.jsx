
import style from "./UnploadImageLogo.module.css"
import React, { useEffect, useState } from "react";
import picture from "../../../AdminSvg/picture.png"
export default function UnploadBannerLogo ({ unploadImageLogo}) {
  const [image, setImage] = useState([]);

  function handleOpenWidget() {
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "deuc5vq5b",
        uploadPreset: "andromedaPrueba",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImage(result.info.url);
          
        }
      }
    );
    myWidget.open();
  }

  console.log(image);

  useEffect(() => {
    let ImagesURL = image;
    unploadImageLogo(ImagesURL)
  }, [image.length])

  return (
    <div>
      <h1 className={style.h1}>Upload Banner Logo </h1>
      <div>
        <div className={style.imagesPreviewContainer}>
            
              <img
                className={style.imgScale}
                // key={img.public_id}
                src={image.length ? image : picture }
                //picture
                // alt="UploadImage"
                width="100px"
                height="300px"
              />
        </div>
        <button
           className={style.btnUnpload}
          id="upload-widget"
          onClick={handleOpenWidget}
        >
          Upload  Image
        </button>
      </div>
    </div>
  );
}