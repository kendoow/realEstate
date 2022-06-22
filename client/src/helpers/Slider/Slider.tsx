import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



type SliderProps = {
    children: React.ReactNode
}

const SimpleSlider = ({ children }: SliderProps): JSX.Element => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <Slider {...settings}>

            {children}

        </Slider>
    );
}
export default SimpleSlider;