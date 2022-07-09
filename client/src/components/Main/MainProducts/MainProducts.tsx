import { FC, useEffect, useState } from "react";
import Spiner from "../../../helpers/Spiner/Spiner";

import useTypedDispatch from "../../../hooks/useTypedDispatch";
import useTypedSelector from "../../../hooks/useTypedSelector";
import { fetchProductsPagination, } from "../../../redux/Slices/ProductsSlice/ProductsActionCreator";

import { PaginationTypes } from "../../../redux/Slices/ProductsSlice/ProductsSlice.types";

import MainProduct from "../MainProduct/MainProduct";

import styles from './MainProducts.module.scss';

const MainProducts: FC = (): JSX.Element => {
    const [pagination, setPagination] = useState<PaginationTypes>({page: 1, limit: 12})
    const { error, loading, products } = useTypedSelector(state => state.productsReducer)
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
            <div className={styles.Center}>
                {loading && <Spiner />}
                {error && <h1 className={styles.Error}> {error}</h1>}
            </div>

            <div className={styles.BlockGrid}>
                {
                    products.map(i => (
                        <MainProduct
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
    )
}

export default MainProducts;