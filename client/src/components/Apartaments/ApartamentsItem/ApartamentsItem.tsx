import { FC } from 'react'
import { ApartamentsItemProps } from './ApartamentsItem.types'
import styles from './ApartamentsItem.module.scss'
import { API_URL } from '../../../http/http'

const ApartamentsItem: FC<ApartamentsItemProps> = ({ image,
    price,
    priceDay,
    priceMonth,
    rewiewsCount,
    rating,
    metro,
    address,
    apartamentsName,
    description}): JSX.Element => {

    return (
        <>
            <div className={styles.container} >
                <div className="">
                    <img src={`${API_URL}${image}`} alt = 'HotelIcon'/>
                </div>
                <div className="">
                    <h3>{apartamentsName}</h3>
                    <div className="">
                        <h4>от <span>{price}</span></h4>
                        <h5>{priceDay} /сутки</h5>

                    </div>
                    <h6>{priceMonth} /месяц</h6>
                    <p>{address}</p>
                    <p>{metro}</p>

                    <h5>Рейтинг - {rating} {rewiewsCount} отзыв</h5>
                    тут будет компонет со звездочками :)


                    <button >Позвонить</button>
                    <button> Написать</button>

                    <h5>{description}</h5>
                    <button>Смотреть на карте</button>
                    <button>Оставить отзыв</button>
                </div>
            </div>
        </>
    )
}

export default ApartamentsItem;