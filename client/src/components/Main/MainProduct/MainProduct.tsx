import { FC } from "react";
import cn from 'classnames';

import { MainProductProps } from "./MatinProduct.types";

import styles from './MainProduct.module.scss';

import imgProduct from '../../../assets/Main/img-product.png';
import metro from '../../../assets/Main/metro.svg';
import gpcProduct from '../../../assets/Main/gpc-product.svg';

const MainProduct: FC<MainProductProps> = ({price, 
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
                <img src={imgProduct} alt="" />
            </button>
            <div className={styles.BlockContent}>
                <div className={styles.Price}>
                    {price} <span className={styles.USD}>{priceDay}</span>
                </div>
                <div className={styles.Rooms}>{rooms}</div>
                <div className={styles.BlockText}>
                    <img src={metro} alt="" />
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