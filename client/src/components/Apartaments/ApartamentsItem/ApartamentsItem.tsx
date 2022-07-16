import { FC, MouseEvent, useEffect, useState } from 'react'
import { API_URL } from '../../../http/http'

import Rating from '../../../helpers/Rating/Rating';

import styles from './ApartamentsItem.module.scss'

import { ApartamentsItemProps } from './ApartamentsItem.types'

import imgMetro from '../../../assets/Main/metro.svg';
import imgAdress from '../../../assets/Main/gpc-product.svg';
import SimpleSlider from '../../../helpers/Slider/Slider';
import ApartsSlider from '../../../helpers/Slider/ApartamentsSlider';
import useTypedDispatch from '../../../hooks/useTypedDispatch';
import useTypedSelector from '../../../hooks/useTypedSelector';
import { addFavourite, deleteFavourite, fetchFavourite } from '../../../redux/Slices/FavouriteSlice/FavouriteSliceActionCreator';
import { FavouriteAddArguments, FavouriteDeleteArguments } from '../../../redux/Slices/FavouriteSlice/FavouriteSlice.types';
import heartEmpty from '../../../assets/Main/heart.svg';
import heartFilled from '../../../assets/Main/heart-filled.svg';

const ApartamentsItem: FC<ApartamentsItemProps> = ({ image,
    price,
    priceDay,
    priceMonth,
    rewiewsCount,
    rating,
    metro,
    address,
    apartamentsName,
    description, id, ...props }): JSX.Element => {

    const [filled, isFilled] = useState<boolean>(false)

    const dispatch = useTypedDispatch()
    const { products } = useTypedSelector(state => state.productsReducer)
    const { favourite } = useTypedSelector(state => state.favouriteReducer)
    const { isAuth, user } = useTypedSelector(state => state.authReducer)

    useEffect(() => {
        isAuth && dispatch(fetchFavourite(user.id))
    }, [isAuth])

    useEffect(() => {
        if (favourite.find(v => v._id === id)) { isFilled(true) }
        
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
            <div className={styles.Container} >
                <div className={styles.SliderBlock}>
                    <div className={styles.SliderContainer}>
                        <img
                            width={30}
                            height={30}
                            onClick={(e) => favoutiteHandler(e)}
                            className={styles.ImgHeart}
                            src={filled ? heartFilled : heartEmpty}
                            alt='heart' />
                        <ApartsSlider>
                            {
                                image.map((img) => (
                                    <div key={img} className={styles.Slider}>

                                        <img height={450} width={650} src={`${API_URL}${img}`} alt="btn" />
                                    </div>
                                ))
                            }
                        </ApartsSlider>
                    </div>
                </div>
                <div className={styles.Text}>
                    <h3 className={styles.Title}>{apartamentsName}</h3>
                    <div className={styles.Price}>
                        <h4>от <span>{price}</span></h4>
                        <h5>{priceDay} /сутки</h5>

                    </div>
                    <h6 className={styles.PriceMonth}>{priceMonth} /месяц</h6>
                    <div className={styles.InfoBlock}>
                        <img src={imgAdress} alt="icon" />
                        <p>{address}</p>
                    </div>
                    <div className={styles.InfoBlock}>
                        <img src={imgMetro} alt="icon" />
                        <p>{metro}</p>
                    </div>

                    <h5 className={styles.Rating}>Рейтинг - {rating} <span>{rewiewsCount} отзыв</span></h5>

                    <Rating isEditable={false} initialRating={4} />

                    <div className={styles.BtnBlock}>
                        <a href='tel:+79660406664' className={styles.BtnDark}>Позвонить</a>
                        <a href="mailto:alterzidan@yandex.ru" className={styles.BtnLight} > Написать</a>
                    </div>

                    <h5 className={styles.Decription}>{description}</h5>
                    <div className={styles.BtnBlock}>

                        <button className={styles.BtnLight}> <svg width="20" height="23" viewBox="0 0 10 15" fill="#C9B087" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M4.31196 0.0445029C2.42068 0.331985 0.847688 1.69769 0.254763 3.56714C-0.261402 5.19446 -0.0106312 6.71481 1.16658 9.09563C1.87027 10.5188 2.72167 11.9022 3.90388 13.5435C4.39898 14.2309 4.98628 15 5.01601 15C5.02804 15 5.18776 14.7992 5.37095 14.5536C7.55104 11.6321 9.20542 8.71246 9.75935 6.80906C9.96938 6.08744 10.0009 5.87166 9.99998 5.16461C9.99926 4.61652 9.98912 4.47431 9.93077 4.1936C9.51571 2.19679 8.14691 0.685996 6.28184 0.166192C5.69905 0.00375181 4.90344 -0.0453938 4.31196 0.0445029ZM5.59157 3.02034C6.31328 3.24877 6.84377 3.80419 7.07116 4.56947C7.17043 4.90353 7.17031 5.42647 7.07089 5.75974C6.82551 6.58247 6.28181 7.12699 5.50299 7.33009C5.01231 7.45804 4.38929 7.36783 3.95274 7.10563C3.5066 6.83766 3.17061 6.4132 2.98168 5.87896C2.90723 5.6685 2.90073 5.61237 2.90055 5.18027C2.90037 4.74573 2.90669 4.6916 2.98472 4.45984C3.17437 3.89637 3.57186 3.42622 4.07046 3.17554C4.43948 2.99001 4.68108 2.93802 5.09617 2.95487C5.28047 2.96236 5.50001 2.99136 5.59157 3.02034Z" />
                        </svg>

                            Смотреть на карте </button>
                        <button className={styles.BtnLight}> <svg width="20" height="25" viewBox="0 0 15 15" fill="#C9B087" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M1.01389 0.0421166C0.766659 0.103923 0.582057 0.209345 0.396868 0.394501C0.206343 0.584987 0.0897648 0.796242 0.0355805 1.04912C-0.0118602 1.2706 -0.0118602 13.7279 0.0355805 13.9494C0.142982 14.4508 0.553645 14.8613 1.05198 14.9655C1.27206 15.0116 9.96331 15.0114 10.1824 14.9654C10.6847 14.8599 11.0908 14.454 11.1988 13.9494C11.2214 13.8441 11.233 13.2127 11.235 11.9869L11.238 10.1795L13.0393 8.40733C15.0629 6.41661 14.9998 6.49104 14.9998 6.09325C14.9998 5.74755 14.9321 5.63981 14.363 5.07901C13.8259 4.54979 13.7385 4.49683 13.4018 4.49683C13.0362 4.49683 13.0123 4.51388 12.0751 5.44446L11.2321 6.28139V3.74288C11.2321 1.96119 11.2222 1.15809 11.1988 1.04912C11.0908 0.544593 10.6847 0.138663 10.1824 0.0331532C9.94656 -0.0164384 1.21388 -0.00788507 1.01389 0.0421166ZM10.1187 0.938221C10.1932 0.976183 10.2555 1.0384 10.2935 1.11283C10.3515 1.22643 10.3525 1.27962 10.3525 4.19527V7.16215L9.20956 8.30466L8.06665 9.4472L7.76242 10.0916C7.00231 11.7016 6.83401 12.0842 6.83413 12.2019C6.83425 12.3432 6.91819 12.4883 7.04632 12.5687C7.23456 12.6868 7.31942 12.6585 8.69587 12.0188C9.90082 11.4587 9.96542 11.4246 10.1546 11.2493L10.3525 11.0659V12.418C10.3525 13.7153 10.3501 13.7748 10.2935 13.8857C10.2555 13.9601 10.1932 14.0224 10.1187 14.0603C10.0042 14.1186 9.95489 14.1193 5.61504 14.1193H1.22711L1.11015 14.0536C1.04151 14.0151 0.970202 13.943 0.937568 13.879C0.883442 13.7731 0.881976 13.5998 0.883178 7.49312C0.884351 1.50496 0.886843 1.21155 0.937216 1.11711C0.966243 1.06265 1.04157 0.986933 1.10458 0.948824L1.21913 0.879549L5.61106 0.879402C9.95504 0.879256 10.0042 0.8799 10.1187 0.938221ZM2.13572 2.90223C2.01193 2.96752 1.90817 3.14034 1.90817 3.28121C1.90817 3.42172 2.0058 3.5816 2.13637 3.65492L2.25333 3.72059H5.6297C8.95574 3.72059 9.00781 3.71971 9.12178 3.66163C9.25187 3.59531 9.35558 3.42656 9.35558 3.28121C9.35558 3.13586 9.25187 2.96711 9.12178 2.90079C9.00775 2.84268 8.95706 2.84186 5.62572 2.84312C2.31804 2.84438 2.24301 2.84566 2.13572 2.90223ZM2.13572 5.2456C2.01193 5.31089 1.90817 5.48371 1.90817 5.62458C1.90817 5.76509 2.0058 5.92497 2.13637 5.99829L2.25333 6.06396H4.92601C7.54677 6.06396 7.60092 6.06282 7.71439 6.00499C7.84449 5.93868 7.94819 5.76992 7.94819 5.62458C7.94819 5.47923 7.84449 5.31048 7.71439 5.24416C7.60086 5.18631 7.54812 5.18523 4.92202 5.18648C2.31499 5.18774 2.24251 5.1893 2.13572 5.2456ZM13.7726 6.44689L13.4165 6.79281L13.0503 6.42853L12.6841 6.06428L13.0352 5.7126L13.3863 5.36089L13.7575 5.73097L14.1288 6.10101L13.7726 6.44689ZM12.4493 7.06027L12.8006 7.41216L11.1635 9.03017L9.52637 10.6482L8.90589 10.9426C8.5646 11.1045 8.26286 11.2456 8.23533 11.2561C8.17179 11.2803 8.16376 11.3005 8.51839 10.5457L8.80051 9.94516L10.4194 8.32677C11.3097 7.43668 12.0517 6.70839 12.0681 6.70839C12.0845 6.70839 12.2561 6.86674 12.4493 7.06027ZM2.13572 7.58897C2.01193 7.65426 1.90817 7.82708 1.90817 7.96795C1.90817 8.10846 2.0058 8.26834 2.13637 8.34165L2.25333 8.40733H4.22232C6.13783 8.40733 6.19445 8.40572 6.30701 8.34836C6.4371 8.28205 6.54081 8.11329 6.54081 7.96795C6.54081 7.8226 6.4371 7.65385 6.30701 7.58753C6.19436 7.53012 6.13918 7.52859 4.21833 7.52985C2.31191 7.53111 2.24166 7.53311 2.13572 7.58897Z" />
                        </svg>

                            Оставить отзыв</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ApartamentsItem;