import { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import useTypedDispatch from "../../../hooks/useTypedDispatch";
import useTypedSelector from "../../../hooks/useTypedSelector";
import { fetchProductsAll } from "../../../redux/Slices/ProductsSlice/ProductsActionCreator";
import { fetchRecommendedProducts } from "../../../redux/Slices/ProductsSlice/ProductsSlice";

import { PaginationTypes } from '../../../redux/Slices/ProductsSlice/ProductsSlice.types';

import MainProduct from "../../Main/MainProduct/MainProduct";

import styles from './RecommendProducts.module.scss';

const RecommendProducts: FC = () => {
    const {products, recommendedProducts} = useTypedSelector(state => state.productsReducer)
    const { id } = useParams() 
    const [pagination, setPagination] = useState<PaginationTypes>({page: 1, limit: 4})
    const dispath = useTypedDispatch()

    useEffect(() => {
        products.length === 0 && dispath(fetchProductsAll()) 
    }, [])
    
    useEffect(() => {
        products.length !== 0 && dispath(fetchRecommendedProducts({id, ...pagination}))
    }, [products, pagination])

    const handlerPagination = () => {
        setPagination({...pagination, page: pagination.page + 1})
    }

    return (
        <div className={styles.Container}>
            <h2 className={styles.Title}>Рекомендуемые номера</h2>

            {
                recommendedProducts.map(i => (
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

            <button 
             className={styles.BtnMore}
             onClick={() => handlerPagination()}>
                Показать еще
            </button>
        </div>
    )
}

export default RecommendProducts;