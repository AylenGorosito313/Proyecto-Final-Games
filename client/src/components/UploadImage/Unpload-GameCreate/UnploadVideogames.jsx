import React, { useState } from "react";
import { useEffect } from "react";
import style from "../Unpload-GameCreate/UnploadGameCreate.module.css";
function UploadVideogame({ UnploadTrailer }) {
  const [image, setImage] = useState([]);

  function handleOpenWidget() {
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dtdzhzcif",
        uploadPreset: "andromeda_test_2",
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

  console.log(image);
  useEffect(() => {
    let trailer = image && image?.map((img) => img.url);
    UnploadTrailer(trailer);
  }, [image.length]);

  // if (image) {
  //   let trailer = image && image?.map((img) => img.url);

  //   UnploadTrailer(trailer);
  // }
  return (
    <div>
      <h1 className={style.h1}>Upload Game Trailer </h1>
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
          Upload  Trailer
        </button>
      </div>
    </div>
  );
}

export default UploadVideogame;
