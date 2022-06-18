import { FC, useEffect } from "react";
import Spiner from "../../../helpers/Spiner/Spiner";

import useTypedDispatch from "../../../hooks/useTypedDispatch";
import useTypedSelector from "../../../hooks/useTypedSelector";
import { fetchProduct, fetchProducts, } from "../../../redux/Slices/ProductsSlice/ProductsActionCreator";
// import { productsApartmentSet } from "../../../redux/Slices/ProductsSlice/ProductsSlice";
import { IProduct } from "../../../redux/Slices/ProductsSlice/ProductsSlice.types";

import MainProduct from "../MainProduct/MainProduct";

import styles from './MainProducts.module.scss';

const MainProducts: FC = (): JSX.Element => {
    const { error, loading, products, selectedApartament } = useTypedSelector(state => state.productsReducer)
    const dispatch = useTypedDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])



    return (
        <div className={styles.Container}>
            <h2 className={styles.Title}>Популярные <br /> апартаменты</h2>
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
            <button className={styles.Btn}>Показать еще</button>
        </div>
    )
}

export default MainProducts;