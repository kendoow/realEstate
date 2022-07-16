import { FC, useEffect, useState } from 'react'


import useTypedSelector from '../../../hooks/useTypedSelector'
import useTypedDispatch from '../../../hooks/useTypedDispatch'
import { filterSelector } from '../../../redux/Slices/FilterSlice/FilterSelector'

import CatalogItem from '../CatalogItem/CatalogItem'
import Spiner from '../../../helpers/Spiner/Spiner'
import Filter from '../../../helpers/Filter/Filter'

// import { PaginationTypes } from '../../../redux/Slices/ProductsSlice/ProductsSlice.types'

import styles from './CatalogItems.module.scss'
import { fetchFilterProducts } from '../../../redux/Slices/FilterSlice/FilterActionCreator'

const CatalogItems: FC = (): JSX.Element => {
    // const [pagination, setPagination] = useState<PaginationTypes>({page: 1, limit: 3})
    const { loading, error, selectedFilters, filterProducts } = useTypedSelector(filterSelector)
    const dispatch = useTypedDispatch()

    console.log(filterProducts)
    useEffect(() => {
        dispatch(fetchFilterProducts(selectedFilters))
    }, [selectedFilters])

    // console.log(filterProduct)
    // useEffect(() => {
    //     dispatch()
    // }, [])

    // useEffect(() => {
    //     dispatch(fetchProductsPagination(pagination))
    // }, [pagination.page, pagination.limit])

    // const handlePagination = () => {
    //     setPagination({...pagination, page: pagination.page + 1})
    // }

    return (
        <>
         <Filter />

         <div className={styles.Container}>
         <div className={styles.Center}>
                {loading && <Spiner />}
                {error && <h1 className={styles.Error}> {error}</h1>}
            </div>
            <div className={styles.BlockGrid}>
           
                {
                    filterProducts.map(i => (
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
                // onClick={() => handlePagination()}
            >
                Показать еще
            </button>
            </div>
        </>
    )
}

export default CatalogItems