import { RatingProps } from "./Rating.props"
import styles from './Rating.module.scss'
import StarIconFilled from '../../assets/Main/filled-star.svg'
import StarIconEmpty from '../../assets/Main/empty-star.svg'
import { useEffect, useState } from "react"
export const Rating = ({ initialRating = 0, isEditable = false }: RatingProps): JSX.Element => {


    const [numSelectedStars, setNumSelectedStars] = useState(initialRating);
    const fillHandler = (i:number) => {
        isEditable ? setNumSelectedStars(i + 1) : setNumSelectedStars(initialRating);
    }
    const unFillHandler = (i:number) => {
        isEditable ? setNumSelectedStars(i + 1 + numSelectedStars) : setNumSelectedStars(initialRating);
    }
    return (
        <div className={styles.Rating}>

            {Array(numSelectedStars).fill(5).map((e, i) => (
                <img key={i} 
                className ={isEditable ? styles.Poiner : ''}
                onClick={() => fillHandler(i)} 
                src={StarIconFilled} 
                alt='star' />

            ))}

            {Array(5 - numSelectedStars).fill(5).map((e, i) => (
                <img key={i} 
                className ={isEditable ? styles.Poiner : ''}
                onClick={() => unFillHandler(i)} 
                src={StarIconEmpty} 
                alt='star' />

            ))}

        </div>
    )
}

export default Rating;