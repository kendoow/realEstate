import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spiner from '../../../helpers/Spiner/Spiner'
import useTypedDispatch from '../../../hooks/useTypedDispatch'
import useTypedSelector from '../../../hooks/useTypedSelector'
import { fetchProduct } from '../../../redux/Slices/ProductsSlice/ProductsActionCreator'
import ApartamentsItem from '../ApartamentsItem/ApartamentsItem'
import styles from './ApartamentsItems.module.scss'


const ApartamentsItems: FC = (): JSX.Element => {
    const dispatch = useTypedDispatch()
    const { id } = useParams()
    useEffect(() => {
        id && dispatch(fetchProduct(id))
    }, [])
    const { loading, error, selectedApartament } = useTypedSelector(state => state.productsReducer)
    console.log(selectedApartament)
   

   


    return (
        <>
            <div>
                <div className={styles.Center}>
                    {loading && <Spiner />}
                    {error && <h1 className={styles.Error}> {error}</h1>}
                </div>
                {Object.keys(selectedApartament).length !== 0 &&
                <ApartamentsItem
                    image={selectedApartament.image}
                    price={selectedApartament.price}
                    priceDay={selectedApartament.priceDay}
                    priceMonth={selectedApartament.priceMonth} // поменять
                    rewiewsCount={selectedApartament.rewiewsCount}// поменять
                    rating={selectedApartament.rating}// поменять
                    metro={selectedApartament.metro}
                    address={selectedApartament.address}
                    apartamentsName={selectedApartament.address}
                    description={selectedApartament.description}
                    key={selectedApartament._id}
                />
}
            </div>
        </>
    )
}

export default ApartamentsItems