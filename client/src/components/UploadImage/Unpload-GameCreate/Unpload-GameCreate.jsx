import React, { useState } from "react";
import { useEffect } from "react";
import style from "../Unpload-GameCreate/UnploadGameCreate.module.css";
export default function UploadGameCreate ({ UnploadImages }) {
  const [image, setImage] = useState([]);

  function handleOpenWidget() {
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "deuc5vq5b",
        uploadPreset: "andromedaPrueba",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImage((prev) => [
            ...prev,
            {
              url: result.info.url,
              public_id: result.info.public_id,
              key: result.info.public_id,
              delete: result.info.delete_token,
            },
          ]);
          console.log(image);
        }
      }
    );
    myWidget.open();
  }

  useEffect(() => {
    let ImagesURL = image && image?.map((img) => img.url);
    UnploadImages(ImagesURL);
  }, [image.length]);


  // if (image) {
  //   let ImagesURL = image && image?.map((img) => img.url);

  //   UnploadImages(ImagesURL);
  // }
  return (
    <>
      <h1 className={style.h1}>Upload  Game Images </h1>
      
        <div className={style.imagesPreviewContainer}>
          {image?.map((img) => (
            
              <img
                className={style.imgScale}
                key={img.public_id}
                src={img.url}
                alt="UploadImage"
                width="100px"
                height="300px"
              />
            
          ))}
        </div>
        <button
          className="cloudinary-button"
          id="upload-widget"
          onClick={handleOpenWidget}
        >
          Upload  Image
        </button>
      
    </>
  );
}
