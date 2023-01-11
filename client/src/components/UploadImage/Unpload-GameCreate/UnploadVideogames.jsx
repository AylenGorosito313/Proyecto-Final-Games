import React, { useState } from "react";
import style from "../Unpload-GameCreate/UnploadGameCreate.module.css";
function UploadVideogame({ Onclick }) {
  const [image, setImage] = useState([]);
  const [Url, setUrl] = useState({
    urlimg: [],
  });
  function handleOpenWidget() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dj8p0rdxn",
        uploadPreset: "AndromedaGamesTEST",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setUrl({
            ...Url,
            urlimg: [Url.urlimg, result.info.url],
          });

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

  if (Url) {
    Onclick(Url.urlimg);
  }
  return (
    <div>
      <h1 className={style.h1}>Upload Trailer </h1>
      <div>
        <div className={style.imagesPreviewContainer}>
          {image?.map((img) => (
            <div>
              <img
                className={style.imgScale}
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

export default UploadVideogame;
