import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SliderProps, ArrowProps } from "./Slider.types";


function SampleNextArrow({className, style, onClick}:ArrowProps) {
   
    return (
      <div
        className={className}
        style={{ ...style, position:"absolute", marginRight:"30px",width:"22px",zIndex:"1", transform:'scale(1.5)'}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow({className, style, onClick}:ArrowProps) {

    return (
      <div
        className={className}
        style={{ ...style,  position:"absolute", marginLeft:"30px",width:"22px",zIndex:"1",transform:'scale(1.5)'}}
        onClick={onClick}
      />
    );
  }
const SimpleSlider = ({ children }: SliderProps): JSX.Element => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <Slider {...settings}>

            {children}

        </Slider>
    );
}
export default SimpleSlider;