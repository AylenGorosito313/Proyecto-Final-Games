import React, { useState } from "react";
import style from "../Unpload-GameCreate/UnploadGameCreate.module.css";
export default function UploadGameCreate(props) {
  const [image, setImage] = useState([]);

  function handleOpenWidget() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dbgzbsigy",
        uploadPreset: "andromedaPrueba",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImage((prev) => [
            {
              url: result.info.url,
              public_id: result.info.public_id,
              key: result.info.public_id,
            },
          ]);
        }
      }
    );
    myWidget.open();
  }

  return (
    <div>
      <h1 className={style.h1}>Upload Image</h1>
      <div>
        <div className={style.imagesPreviewContainer}>
          {image?.map((img) => (
            <div>

  <img className={style.imgScale}
                    key={img.public_id}
                    src={img.url}
                    alt="UploadImage"
                    width="100px"
                    height="300px"
                />

            </div>
 
          ))}
        </div>
        <button
          className="cloudinary-button"
          id="upload-widget"
          onClick={handleOpenWidget}
        >
          Upload Game Image
        </button>
      </div>
    </div>
  );
}
