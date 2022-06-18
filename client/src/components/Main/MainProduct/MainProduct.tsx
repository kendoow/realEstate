import { FC } from "react";
import cn from 'classnames';

import { MainProductProps } from "./MainProduct.types";

import styles from './MainProduct.module.scss';

import imgMetro from '../../../assets/Main/metro.svg';
import gpcProduct from '../../../assets/Main/gpc-product.svg';
import { API_URL } from "../../../http/http";
import { Link } from "react-router-dom";
import { IProduct } from "../../../redux/Slices/ProductsSlice/ProductsSlice.types";
import { fetchProduct } from "../../../redux/Slices/ProductsSlice/ProductsActionCreator";
import useTypedDispatch from "../../../hooks/useTypedDispatch";

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
   


    return (
        <div
            className={cn(styles.Container, className)}
            {...props}>
            <Link to={`/apartments/${id}`} className={styles.Btn}>
                <img src={`${API_URL}${image}`} alt="btn" />
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