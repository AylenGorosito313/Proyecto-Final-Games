import React, { useState } from "react";
import { useEffect } from "react";
import style from "../Unpload-GameCreate/UnploadGameCreate.module.css";
function UploadGameArchive({ UnploadArchive }) {
  const [image, setImage] = useState([]);

  function handleOpenWidget() {
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dj8p0rdxn",
        uploadPreset: "AndromedaGamesTEST",
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
    let archive = image && image?.map((img) => img.url);
    UnploadArchive(archive);
  }, [image.length]);

  // if (image) {
  //   let archive = image && image?.map((img) => img.url);

  //   UnploadArchive(archive);
  // }
  return (
    <div>
      <h1 className={style.h1}>Upload Game File</h1>
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
          Upload Files
        </button>
      </div>
    </div>
  );
}

export default UploadGameArchive;
