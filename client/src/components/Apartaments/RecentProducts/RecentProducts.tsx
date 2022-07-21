import { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import useTypedDispatch from "../../../hooks/useTypedDispatch";
import useTypedSelector from "../../../hooks/useTypedSelector";
import { fetchProductsAll } from "../../../redux/Slices/ProductsSlice/ProductsActionCreator";
import { productSelector } from "../../../redux/Slices/ProductsSlice/ProductSelector";
import { fetchRecentProducts } from "../../../redux/Slices/ProductsSlice/ProductsSlice";

import { PaginationTypes } from '../../../redux/Slices/ProductsSlice/ProductsSlice.types';

import MainProduct from "../../Main/MainProduct/MainProduct";

import styles from './RecentProducts.module.scss';

const RecentProducts: FC = () => {
    const { products, recentProducts } = useTypedSelector(productSelector)
    const { id } = useParams()
    const [pagination, setPagination] = useState<PaginationTypes>({ page: 1, limit: 4 })
    const dispath = useTypedDispatch()

    useEffect(() => {
        products.length === 0 && dispath(fetchProductsAll())
    }, [])

    useEffect(() => {
        products.length !== 0 && dispath(fetchRecentProducts({ id, ...pagination }))
    }, [products, pagination])

    const handlerPagination = () => {
        setPagination({ ...pagination, page: pagination.page + 1 })
    }

    return (
        <div className={styles.Container}>
            <h2 className={styles.Title}>Рекомендуемые номера</h2>
            <div className={styles.GridContainer}>
                {
                    recentProducts.map(product => (
                        <MainProduct key={product._id} id={product._id} {...product} />
                    ))
                }
            </div>
            <button
                className={styles.BtnMore}
                onClick={() => handlerPagination()}>
                Показать еще
            </button>
        </div>
    )
}

export default RecentProducts;