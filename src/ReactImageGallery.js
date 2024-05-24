import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faX,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const images = [
  "/images/painting6.png",
  "/images/painting11.png",
  "/images/painting2.png",
  "/images/painting3.png",
  "/images/painting4.png",
  "/images/painting5.png",
  "/images/painting1.png",
  "/images/painting7.png",
  "/images/painting8.png",
  "/images/painting9.png",
  "/images/painting10.png",
  "/images/painting1.png",
  "/images/painting12.png",
  "/images/painting13.png",
  "/images/painting14.png",
  "/images/painting15.png",
  "/images/painting16.png",
  "/images/painting17.png",
  "/images/resin1.png",
  "/images/resing5.png",
  "/images/resin3.png",
  "/images/resin4.png",
  "/images/resing2.png",
];

const ReactImageGallery = (props) => {
  const [data, setData] = useState({ img: "", i: 0 });

  useEffect(() => {
    if (data.img) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Clean up when component unmounts
    };
  }, [data.img]);

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action === "next-img") {
      setData({ img: images[i + 1], i: i + 1 });
    }
    if (action === "previous-img") {
      setData({ img: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <>
      {data.img && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "black",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <FontAwesomeIcon
            icon={faX}
            onClick={() => imgAction()}
            style={{
              fontSize: "clamp(20px, 5vw, 30px)",
              color: "white",
              position: "absolute",
              top: "25px",
              right: "25px",
              cursor: "pointer",
            }}
          />

          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{
              fontSize: "clamp(20px, 5vw, 30px)",
              color: "white",
              cursor: "pointer",
              marginLeft: "20px",
            }}
            onClick={() => imgAction("previous-img")}
          />
          <img
            src={data.img}
            style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{
              fontSize: "30px",
              color: "white",
              cursor: "pointer",
              marginRight: "20px",
            }}
            onClick={() => imgAction("next-img")}
          />
        </div>
      )}
      <div style={{ padding: "40px", background: "black" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="50px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
                alt=""
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default ReactImageGallery;
