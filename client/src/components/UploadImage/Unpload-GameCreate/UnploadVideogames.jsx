import React, { useState } from "react";
import style from "../Unpload-GameCreate/UnploadGameCreate.module.css";
function UploadVideogame(props) {
  const [image, setImage] = useState([]);

  function handleOpenWidget() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dj8p0rdxn",
        uploadPreset: "j5ivnctp",
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
console.log(image.map((ele)=>{ele.url}))
  return (
    <div>
      <h1 className={style.h1}>Upload Trailer </h1>
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

export default   UploadVideogame