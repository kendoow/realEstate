import { FC, useState, MouseEvent, useEffect } from "react";
import cn from 'classnames';
import { Link } from "react-router-dom";

import useTypedDispatch from "../../../hooks/useTypedDispatch";
import useTypedSelector from "../../../hooks/useTypedSelector";
import { addFavourite, deleteFavourite, fetchFavourite } from "../../../redux/Slices/FavouriteSlice/FavouriteSliceActionCreator";

import SimpleSlider from "../../../helpers/Slider/Slider";

import { FavouriteAddArguments, FavouriteDeleteArguments } from "../../../redux/Slices/FavouriteSlice/FavouriteSlice.types";
import { MainProductProps } from "./MainProduct.types";
import { API_URL } from "../../../http/http";

import styles from './MainProduct.module.scss';

import imgMetro from '../../../assets/Main/metro.svg';
import gpcProduct from '../../../assets/Main/gpc-product.svg';
import heartEmpty from '../../../assets/Main/heart.svg';
import heartFilled from '../../../assets/Main/heart-filled.svg';

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
    
    const dispatch = useTypedDispatch()
    const { products } = useTypedSelector(state => state.productsReducer)
    const { favourite } = useTypedSelector(state => state.favouriteReducer)
    const { user } = useTypedSelector(state => state.authReducer)
    
    useEffect(() => {
        user.id && dispatch(fetchFavourite(user.id))
    }, [user.id])

    useEffect(() => {
        if (favourite.find(v => v._id === id)) isFilled(true)
    }, [favourite])

    const favoutiteHandler = (e: MouseEvent<HTMLImageElement>) => {
        e.preventDefault()
        if (filled) {
            const favouriteDeleteArguments: FavouriteDeleteArguments = {
                userId: user.id,
                productId: id,
                favourite,
            }
            dispatch(deleteFavourite(favouriteDeleteArguments))
        } else {
            const favouriteAddArguments: FavouriteAddArguments = {
                userId: user.id,
                productId: id,
                favourite,
                products,
            }
            dispatch(addFavourite(favouriteAddArguments))
        }
        isFilled(!filled)
    }

    return (
        <div
            className={cn(styles.Container, className)}
            {...props}>
            <Link 
             to={`/apartments/${id}`} 
             className={styles.Btn}>
                <img 
                 onClick={e => favoutiteHandler(e)} 
                 className={styles.ImgHeart} 
                 src={filled ? heartFilled : heartEmpty} 
                 alt='heart' />
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