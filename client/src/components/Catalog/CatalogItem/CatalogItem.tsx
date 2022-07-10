import { FC, useState, MouseEvent, useEffect } from "react";
import { Link } from 'react-router-dom'


import useTypedSelector from "../../../hooks/useTypedSelector";
import useTypedDispatch from "../../../hooks/useTypedDispatch";
import { FavouriteAddArguments, FavouriteDeleteArguments } from "../../../redux/Slices/FavouriteSlice/FavouriteSlice.types";
import { addFavourite, deleteFavourite, fetchFavourite } from "../../../redux/Slices/FavouriteSlice/FavouriteSliceActionCreator";

import { CatalogItemProps } from './CatalogItem.types'
import { API_URL } from "../../../http/http";

import SimpleSlider from '../../../helpers/Slider/Slider'

import styles from './CatalogItem.module.scss'

import heartEmpty from '../../../assets/Main/heart.svg';
import heartFilled from '../../../assets/Main/heart-filled.svg';
import imgMetro from '../../../assets/Main/metro.svg';
import gpcProduct from '../../../assets/Main/gpc-product.svg';




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

    const dispatch = useTypedDispatch()
    const { products } = useTypedSelector(state => state.productsReducer)
    const { favourite } = useTypedSelector(state => state.favouriteReducer)
    const { isAuth, user } = useTypedSelector(state => state.authReducer)
    
    useEffect(() => {
        isAuth && dispatch(fetchFavourite(user.id))
    }, [isAuth])

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
        <>
            <div className={styles.Container} {...props}>

                <Link to={`/apartments/${id}`} className={styles.Btn}>
                    <img 
                     width={30} 
                     height = {30} 
                     onClick={(e) => favoutiteHandler(e)} 
                     className={styles.ImgHeart} 
                     src={filled ? heartFilled : heartEmpty} 
                     alt='heart' />
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