import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

import StarIconFilled from '../../assets/Main/filled-star.svg'
import StarIconEmpty from '../../assets/Main/empty-star.svg'

interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    filled: number
}

const Rating:FC<RatingProps> = ({filled}):JSX.Element => {
    const ratingArray = new Array(5).fill(true).map((_, index: number) => {
        if (index > filled - 1) return false
        else return true
    })
        
    return (
        <>
            {
                ratingArray.map((value,i) => <img key={i} src={value ? StarIconFilled :StarIconEmpty } alt ='star'/>)
            }
        </>

    )
}

export default Rating