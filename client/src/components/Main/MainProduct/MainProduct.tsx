import { FC, useState, MouseEvent } from "react";
import cn from 'classnames';

import { MainProductProps } from "./MainProduct.types";

import styles from './MainProduct.module.scss';

import imgMetro from '../../../assets/Main/metro.svg';
import gpcProduct from '../../../assets/Main/gpc-product.svg';
import { API_URL } from "../../../http/http";
import { Link } from "react-router-dom";
import heartEmpty from '../../../assets/Main/heart.svg';
import heartFilled from '../../../assets/Main/heart-filled.svg';
import SimpleSlider from "../../../helpers/Slider/Slider";

const MainProduct: FC<MainProductProps> = ({ image,
    price,
    priceDay,
    rooms,
    metro,
    address,
    description,
    className,
    id,
    ...props }): JSX.Element => {

    const [filled, isFilled] = useState<boolean>(false)

    const fillHandler = (e: MouseEvent<HTMLImageElement>) => {
        isFilled(!filled)
        e.preventDefault()
    }

    return (
        <div
            className={cn(styles.Container, className)}
            {...props}>
            <Link to={`/apartments/${id}`} className={styles.Btn}>
                <img onClick={(e) => fillHandler(e)} className={styles.ImgHeart} src={filled ? heartFilled : heartEmpty} alt='heart' />
                <SimpleSlider>
                    {
                        image.map((img) => (
                            <div key={img} className={styles.Slider}>

                                <img src={`${API_URL}${img}`} alt="btn" />
                            </div>
                        ))
                    }
                </SimpleSlider>
            </Link>
            <div className={styles.BlockContent}>
                <div className={styles.Price}>
                    {price} <span className={styles.USD}>{priceDay} /сутки </span>
                </div>
                <div className={styles.Rooms}>{rooms}</div>
                <div className={styles.BlockText}>
                    <img src={imgMetro} alt="metroIcon" />
                    <div>{metro}</div>
                </div>
                <div className={styles.BlockText}>
                    <img src={gpcProduct} alt="icon" />
                    <div>{address}</div>
                </div>
            </div>
        </div>
    )
}

export default MainProduct;