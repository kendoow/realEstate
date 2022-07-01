import { FC, useEffect, useState } from 'react'


import useTypedSelector from '../../../hooks/useTypedSelector'
import CatalogItem from '../CatalogItem/CatalogItem'
import Spiner from '../../../helpers/Spiner/Spiner'
import styles from './CatalogItems.module.scss'
import useTypedDispatch from '../../../hooks/useTypedDispatch'
import { PaginationTypes } from '../../../redux/Slices/ProductsSlice/ProductsSlice.types'
import { fetchProductsPagination } from '../../../redux/Slices/ProductsSlice/ProductsActionCreator'

const CatalogItems: FC = (): JSX.Element => {
    const [pagination, setPagination] = useState<PaginationTypes>({page: 1, limit: 12})
    const { error, loading, products } = useTypedSelector(state => state.productsReducer)
    const dispatch = useTypedDispatch()

    useEffect(() => {
        dispatch(fetchProductsPagination(pagination))
    }, [pagination.page, pagination.limit])

    const handlePagination = () => {
        setPagination({...pagination, page: pagination.page + 1})
    }

    return (
        <>
         <div className={styles.Container}>
         <div className={styles.Center}>
                {loading && <Spiner />}
                {error && <h1 className={styles.Error}> {error}</h1>}
            </div>
            <div className={styles.BlockGrid}>
           
                {
                    products.map(i => (
                        <CatalogItem
                        title={i.apartamentsName}
                            id={i._id}
                            key={i._id}
                            image={i.image}
                            price={i.price}
                            priceDay={i.priceDay}
                            rooms={i.rooms}
                            metro={i.metro}
                            description={i.description}
                            address={i.address}

                        />
                    ))
                }
            </div>
            <button 
             className={styles.Btn}
             onClick={() => handlePagination()}>
                Показать еще
            </button>
            </div>
        </>
    )
}

export default CatalogItems