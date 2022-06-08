import { FC, useEffect } from "react";

import useTypedDispatch from "../../../hooks/useTypedDispatch";
import useTypedSelector from "../../../hooks/useTypedSelector";
import { fetchProducts } from "../../../redux/Slices/ProductsSlice/ProductsActionCreator";

import MainProduct from "../MainProduct/MainProduct";

import styles from './MainProducts.module.scss';

const MainProducts: FC = () => {
    const {products} = useTypedSelector(state => state.productsReducer)
    const dispatch = useTypedDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className={styles.Container}>
            <h2 className={styles.Title}>Популярные апартаменты</h2>
            <div className={styles.BlockGrid}>
                {
                    products.map(i => (
                        <MainProduct 
                         key={i._id}
                         price={i.price}
                         priceDay={i.priceDay}
                         rooms={i.rooms}
                         metro={i.metro}
                         description={i.description} 
                         address={i.address}/>
                    ))
                }
            </div>
            <button className={styles.Btn}>Показать еще</button>
        </div>
    )
}

export default MainProducts;