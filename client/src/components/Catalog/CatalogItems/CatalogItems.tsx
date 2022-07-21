import { FC, useEffect, useState } from 'react'


import useTypedSelector from '../../../hooks/useTypedSelector'
import useTypedDispatch from '../../../hooks/useTypedDispatch'
import { filterSelector } from '../../../redux/Slices/FilterSlice/FilterSelector'
import { fetchFilterProducts } from '../../../redux/Slices/FilterSlice/FilterActionCreator'

import CatalogItem from '../CatalogItem/CatalogItem'
import Spiner from '../../../UI/Spiner/Spiner'
import Filter from '../../../UI/Filter/Filter'
import FilterMobile from '../../../UI/Filter/FilterMobile/FilterMobile'

// import { PaginationTypes } from '../../../redux/Slices/ProductsSlice/ProductsSlice.types'

import styles from './CatalogItems.module.scss'
import { PaginationTypes } from '../../../redux/Slices/ProductsSlice/ProductsSlice.types'

const CatalogItems: FC = (): JSX.Element => {
    const [pagination, setPagination] = useState<PaginationTypes>({page: 1, limit: 3})
    const { loading, error, selectedFilters, filterProducts } = useTypedSelector(filterSelector)
    const dispatch = useTypedDispatch()

    useEffect(() => {
        dispatch(fetchFilterProducts(selectedFilters))
    }, [selectedFilters])

    // useEffect(() => {
    //     dispatch()
    // }, [])

    // useEffect(() => {
    //     dispatch(fetchProductsPagination(pagination))
    // }, [pagination.page, pagination.limit])

    const handlePagination = () => {
        setPagination({...pagination, page: pagination.page + 1})
    }

    return (
        <>
            <FilterMobile />
            <Filter />
            <div className={styles.Container}>
                <h2 className={styles.Title}>Аппартаменты в Москве по вашему запросу</h2>
                {
                    loading && <div className={styles.Center}>
                        <Spiner />
                    </div>
                }
                {
                    error && <div className={styles.Center}>
                        <h1 className={styles.Error}>{error}</h1>
                    </div>
                }
                <div className={styles.BlockGrid}>
                    {
                        filterProducts.slice(0, pagination.limit * pagination.page).map(product => (
                            <CatalogItem key={product._id} id={product._id} {...product} />
                        ))
                    }
                </div>
                <button
                    className={styles.Btn}
                onClick={() => handlePagination()}
                >
                    Показать еще
                </button>

            </div>
        </>
    )
}

export default CatalogItems