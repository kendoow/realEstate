import { FC, useEffect } from "react";
import cn from 'classnames';
import { Clusterer, FullscreenControl, Map, Placemark, ZoomControl } from "react-yandex-maps";

import useTypedDispatch from "../../hooks/useTypedDispatch";
import { fetchProductsAll } from "../../redux/Slices/ProductsSlice/ProductsActionCreator";
import useTypedSelector from "../../hooks/useTypedSelector";
import { productSelector } from "../../redux/Slices/ProductsSlice/ProductSelector";

import { MapsProps } from "./Maps.types";

import styles from './Maps.module.scss';
import { useNavigate } from "react-router-dom";

const Maps: FC<MapsProps> = ({ className, ...props }) => {

    const dispatch = useTypedDispatch()
    const { products, selectedProduct } = useTypedSelector(productSelector)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(fetchProductsAll())
    }, [])

    const redirectHandler = (id:string) => {
        navigate(`/apartments/${id}`)       
    }

    console.log(selectedProduct)
    return (
        <div
            className={cn(styles.Container, className)}
            {...props}
        >
            <h2 className={styles.Title}>Расположение наших <br />апартаментов в Москве</h2>
            <Map
                width='100%'
                height='50vh'
                defaultState={{ center: [55.726955, 37.582328], zoom: 9 }}
            >
                <Clusterer
                    options={{
                        preset: 'islands#blueClusterIcons',

                        groupByCoordinates: false,
                        clusterDisableClickZoom: true,
                        clusterHideIconOnBalloonOpen: false,
                        geoObjectHideIconOnBalloonOpen: false
                    }}

                >

                    {products.length &&
                        products.map((product, i) =>
                              
                            <Placemark
                            
                                onClick = {() => redirectHandler(product._id)}
                                key={product._id}
                                geometry={[+product.coordinates.split(' ')[0], +product.coordinates.split(' ')[1]]}
                                options={{ preset: 'islands#blueCircleIcon'  }}
                                
                            />)}

                </Clusterer>
                <FullscreenControl />
                <ZoomControl options={{
                    size: 'small',
                    position: {
                        top: '20vh',
                        right: 10,
                        left: 'auto',
                        bottom: 'auto',
                    },
                }} />
            </Map>
        </div >
    )
}

export default Maps;