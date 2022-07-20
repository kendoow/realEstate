import { FC, useEffect } from "react";
import cn from 'classnames';
import { Clusterer, FullscreenControl, Map, Placemark, ZoomControl } from "react-yandex-maps";

import { MapsProps } from "./Maps.types";

import styles from './Maps.module.scss';
import useTypedDispatch from "../../hooks/useTypedDispatch";
import { fetchProductsAll } from "../../redux/Slices/ProductsSlice/ProductsActionCreator";
import useTypedSelector from "../../hooks/useTypedSelector";
import { productSelector } from "../../redux/Slices/ProductsSlice/ProductSelector";

const Maps: FC<MapsProps> = ({ className, ...props }) => {

    const dispatch = useTypedDispatch()
    const { products } = useTypedSelector(productSelector)

    useEffect(() => {
        dispatch(fetchProductsAll())
    }, [])


    const getPointData = (index: number) => {
        return {
            balloonContentBody: "placemark <strong>balloon " + index + "</strong>",
            clusterCaption: "placemark <strong>" + index + "</strong>"
        };
    };

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
                        preset: "islands#invertedVioletClusterIcons",
                        groupByCoordinates: false,
                        clusterDisableClickZoom: true,
                        clusterHideIconOnBalloonOpen: false,
                        geoObjectHideIconOnBalloonOpen: false
                    }}

                >

                    {products.length &&
                        products.map((product, i) =>
                            <Placemark
                                key={product._id}
                                geometry={[+product.coordinates.split(' ')[0], +product.coordinates.split(' ')[1]]}
                                properties={getPointData(i)}
                                options={{ preset: "islands#violetIcon" }}
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