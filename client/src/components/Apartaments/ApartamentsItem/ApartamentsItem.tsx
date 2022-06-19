import { FC } from 'react'
import { ApartamentsItemProps } from './ApartamentsItem.types'
import styles from './ApartamentsItem.module.scss'
import { API_URL } from '../../../http/http'
import imgMetro from '../../../assets/Main/metro.svg';
import imgAdress from '../../../assets/Main/gpc-product.svg';
import GpsIcon from '../../../assets/Apartaments/gps.svg';
import WritingIcon from '../../../assets/Apartaments/writing.svg';
const ApartamentsItem: FC<ApartamentsItemProps> = ({ image,
    price,
    priceDay,
    priceMonth,
    rewiewsCount,
    rating,
    metro,
    address,
    apartamentsName,
    description }): JSX.Element => {

    return (
        <>
            <div className={styles.Container} >
                <div className={styles.SliderBlock}>
                    <img className={styles.MainImage} src={`${API_URL}${image}`} alt='HotelIcon' />
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
                    тут будет компонет со звездочками :)

                    <div className={styles.BtnBlock}>
                        <button className={styles.BtnDark}>Позвонить</button>
                        <button className={styles.BtnLight} > Написать</button>
                    </div>


                    <h5 className={styles.Decription}>{description}</h5>
                    <div className={styles.BtnBlock}>
                    
                        <button  className={styles.BtnLight}> <img src = {GpsIcon}/>Смотреть на карте</button>
                        <button className={styles.BtnLight}> <img src = {WritingIcon}/>Оставить отзыв</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ApartamentsItem;