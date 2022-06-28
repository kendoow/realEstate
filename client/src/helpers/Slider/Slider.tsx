import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SliderProps } from "./Slider.types";


function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, position:"absolute", marginRight:"30px",width:"20px",zIndex:"1"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,  position:"absolute", marginLeft:"30px",width:"20px",zIndex:"1"}}
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