import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import sprite from "./sprite.svg";
const images = [
  "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345767/demo_image2.jpg",
  "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652366604/demo_image5.jpg",
  "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
];
function App() {
  return (
    <div className="box">
      <Carousel
            showIndicators
            renderArrowNext={(clickHandler, hasNext) => {
              return (
                hasNext && (
                  <button className="nav_btn nav_btn_right" onClick={clickHandler}>
                    <svg>
                      <use xlinkHref={sprite + "#right"}></use>
                    </svg>
                  </button>
                )
              );
            }}
            renderArrowPrev={(clickHandler, hasNext) => {
              return (
                hasNext && (
                  <button onClick={clickHandler} className="nav_btn nav_btn_left">
                    <svg>
                      <use xlinkHref={sprite + "#left"}></use>
                    </svg>
                  </button>
                )
              );
            }}
          >
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default App;