import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { API_URL } from "../../../http/http";
import useTypedSelector from "../../../hooks/useTypedSelector";
import { productSelector } from "../../../redux/Slices/ProductsSlice/ProductSelector";

import Slider from "react-slick";

import { SliderProps, ArrowProps } from "../MainSlider/MainSlider.types";

import './ApartamentsSlider.scss'
import { FC, useRef, useState } from "react";


function SampleNextArrow({ className, style, onClick }: ArrowProps) {
    return (
        <div
            className={className}
            style={{
                ...style,
                marginTop: "0",
                position: "absolute",
                marginRight: "40px",
                width: "22px",
                zIndex: "1",
                transform: 'scale(2)'
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow({ className, style, onClick }: ArrowProps) {
    return (
        <div
            className={className}
            style={{
                ...style,
                marginTop: "0",
                position: "absolute",
                marginLeft: "40px",
                width: "22px",
                zIndex: "1",
                transform: 'scale(2)'
            }}
            onClick={onClick}
        />
    );
}

const ApartsSlider: FC<SliderProps> = ({ children }) => {
    const [sliderTop, setSliderTop] = useState(null)
    const [sliderBottom, setSliderBottom] = useState(null)
    
   
    const { selectedProduct } = useTypedSelector(productSelector)
    const settings = {
        // customPaging: function (i: number) {
        //     return (
        //         <img
        //             className="SliderItem"
        //             src={`${API_URL}${selectedProduct.image[i]}`}
        //             alt="btn"
        //         />
        //     );
        // },
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "SliderSelected",
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <>
            <Slider asNavFor={sliderBottom}
                ref={(slider:any) => setSliderTop(slider)} {...settings}>
                {children}
            </Slider>
            <Slider
            
                asNavFor={sliderTop}
                ref={(slider:any) => setSliderBottom(slider)}
                slidesToShow={2}
                swipeToSlide={true}
                focusOnSelect={true}
            >
                {selectedProduct.image.map((_, i) =>
                    <img
                        className="SliderItem"
                        src={`${API_URL}${selectedProduct.image[i]}`}
                        alt="btn"
                    />)}

            </Slider>
        </>
    );
}

export default ApartsSlider;