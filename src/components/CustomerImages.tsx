import { useEffect, useState } from "react";
import { Image } from "../assets/type";
import styles from "./CustomerDetails.module.css";

const CustomerImages = () => {
  const [images, setImages] = useState<Image[]>([]);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=9"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.statusText);
      }
      const data = await response.json();
      const imageUrls = data
        .slice(0, 9)
        .map((ele: { url: string; id: string }) => ({
          url: ele.url,
          id: ele.id,
        }));
      setImages(imageUrls);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
    const intervalId = setInterval(fetchImages, 10000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      {" "}
      {images.map((image) => (
        <img
          key={image.id}
          src={image.url}
          alt="Customer related"
          className={styles.picture}
        />
      ))}
    </>
  );
};

export default CustomerImages;
