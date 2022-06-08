import { FC } from "react";
import cn from 'classnames';

import { MainProductProps } from "./MatinProduct.types";

import styles from './MainProduct.module.scss';

import imgMetro from '../../../assets/Main/metro.svg';
import gpcProduct from '../../../assets/Main/gpc-product.svg';
import { API_URL } from "../../../http/http";

const MainProduct: FC<MainProductProps> = ({image,
                                            price, 
                                            priceDay, 
                                            rooms, 
                                            metro, 
                                            address, 
                                            description,
                                            className,
                                            ...props}) => {
    return (
        <div 
         className={cn(styles.Container, className)} 
         {...props}>
            <button className={styles.Btn}>
                <img src={`${API_URL}${image}`} alt="" />
            </button>
            <div className={styles.BlockContent}>
                <div className={styles.Price}>
                    {price} <span className={styles.USD}>{priceDay}</span>
                </div>
                <div className={styles.Rooms}>{rooms}</div>
                <div className={styles.BlockText}>
                    <img src={imgMetro} alt="" />
                    <div>{metro}</div>
                </div>
                <div className={styles.BlockText}>
                    <img src={gpcProduct} alt="" />
                    <div>{address}</div>
                </div>
            </div>
        </div>
    )
}

export default MainProduct;