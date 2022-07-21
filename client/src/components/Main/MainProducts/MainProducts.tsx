import { FC, useEffect, useState } from "react";

import useTypedDispatch from "../../../hooks/useTypedDispatch";
import useTypedSelector from "../../../hooks/useTypedSelector";
import { fetchProductsPagination, } from "../../../redux/Slices/ProductsSlice/ProductsActionCreator";
import { productSelector } from "../../../redux/Slices/ProductsSlice/ProductSelector";

import { PaginationTypes } from "../../../redux/Slices/ProductsSlice/ProductsSlice.types";

import MainProduct from "../MainProduct/MainProduct";
import Spiner from "../../../UI/Spiner/Spiner";

import styles from './MainProducts.module.scss';

const MainProducts: FC = (): JSX.Element => {
    const [pagination, setPagination] = useState<PaginationTypes>({page: 1, limit: 12})
    const { error, loading, products } = useTypedSelector(productSelector)
    const dispatch = useTypedDispatch()
   
    // потом понял что немного кривая можно подгружать не все 12 и тд, а как делал с комментами
    useEffect(() => {
        dispatch(fetchProductsPagination(pagination))
    }, [pagination.page, pagination.limit])

    const handlePagination = () => {
        setPagination({...pagination, page: pagination.page + 1})
    }

    return (
        <div className={styles.Container}>
            <h2 id="popular" className={styles.Title}>Популярные <br /> апартаменты</h2>
                {
                    loading && <div className={styles.Center}>
                                    <Spiner />
                               </div>
                }
                {
                    error && 
                    <div className={styles.Center}>
                        <h1 className={styles.Error}>{error}</h1>
                    </div>
                }

            <div className={styles.BlockGrid}>
                {
                    products.slice(0,pagination.limit * pagination.page).map(product => <MainProduct key={product._id} id={product._id} {...product} />)
                }
            </div>
            <button 
             className={styles.Btn}
             onClick={() => handlePagination()}>
                Показать еще
            </button>
        </div>
    )
}

export default MainProducts;