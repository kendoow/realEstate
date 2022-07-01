import { FC, useState, MouseEvent } from "react";
import { Link } from 'react-router-dom'

import SimpleSlider from '../../../helpers/Slider/Slider'
import { CatalogItemProps } from './CatalogItem.types'
import { API_URL } from "../../../http/http";

import heartEmpty from '../../../assets/Main/heart.svg';
import heartFilled from '../../../assets/Main/heart-filled.svg';
import imgMetro from '../../../assets/Main/metro.svg';
import gpcProduct from '../../../assets/Main/gpc-product.svg';
import styles from './CatalogItem.module.scss'



const CatalogItem: FC<CatalogItemProps> = ({ image,
    price,
    priceDay,
    rooms,
    metro,
    address,
    description,
    className,
    id,
    title,
    ...props }): JSX.Element => {

    const [filled, isFilled] = useState<boolean>(false)

    const fillHandler = (e: MouseEvent<HTMLImageElement>) => {
        isFilled(!filled)
        e.preventDefault()
    }


    return (
        <>
            <div className={styles.Container} {...props}>

                <Link to={`/apartments/${id}`} className={styles.Btn}>
                    <img width={30} height = {30} onClick={(e) => fillHandler(e)} className={styles.ImgHeart} src={filled ? heartFilled : heartEmpty} alt='heart' />
                    <SimpleSlider>
                        {
                            image.map((img) => (
                                <div key={img} className={styles.Slider}>

                                    <img height={350} width={350} src={`${API_URL}${img}`} alt="btn" />
                                </div>
                            ))
                        }
                    </SimpleSlider>
                </Link>
                <div className={styles.BlockContent}>
                    <h3>{title}</h3>
                    <div className={styles.Price}>
                        от {price} <span className={styles.USD}>{priceDay} /сутки </span>
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
                    <div className={styles.Description}>
                        {description}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatalogItem