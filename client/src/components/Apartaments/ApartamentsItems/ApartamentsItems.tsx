import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import useTypedDispatch from '../../../hooks/useTypedDispatch'
import useTypedSelector from '../../../hooks/useTypedSelector'
import { productSelector } from '../../../redux/Slices/ProductsSlice/ProductSelector'
import { fetchProduct } from '../../../redux/Slices/ProductsSlice/ProductsActionCreator'

import ApartamentsItem from '../ApartamentsItem/ApartamentsItem'
import Spiner from '../../../UI/Spiner/Spiner'

import styles from './ApartamentsItems.module.scss'


const ApartamentsItems: FC = (): JSX.Element => {
    const { loading, error, selectedProduct } = useTypedSelector(productSelector)
    const { id } = useParams()
    const dispatch = useTypedDispatch()
    
    useEffect(() => {
        id && dispatch(fetchProduct(id))
    }, [])
   
    return (
        <>
            <div className={styles.Container}>
                <div className={styles.Center}>
                    {loading && <Spiner />}
                    {error && <h1 className={styles.Error}> {error}</h1>}
                </div>
                {
                    Object.keys(selectedProduct).length !== 0 &&
                    <ApartamentsItem
                    id ={selectedProduct._id}
                        image={selectedProduct.image}
                        price={selectedProduct.price}
                        priceDay={selectedProduct.priceDay}
                        priceMonth={selectedProduct.priceMonth} 
                        rewiewsCount={selectedProduct.rewiewsCount}
                        rating={selectedProduct.rating}
                        metro={selectedProduct.metro}
                        address={selectedProduct.address}
                        apartamentsName={selectedProduct.apartamentsName}
                        description={selectedProduct.description}
                        key={selectedProduct._id}
                    />
                }
                
            </div>
        </>
    )
}

export default ApartamentsItems;