import { FC, useEffect } from "react";

import { Clusterer, FullscreenControl, Map, Placemark, ZoomControl } from "react-yandex-maps";



import useTypedDispatch from "../../hooks/useTypedDispatch";
import useTypedSelector from "../../hooks/useTypedSelector";
import { fetchFilterProducts } from "../../redux/Slices/FilterSlice/FilterActionCreator";
import { filterSelector } from "../../redux/Slices/FilterSlice/FilterSelector";
import { productSelector } from "../../redux/Slices/ProductsSlice/ProductSelector";

const Maps: FC = () => {

    const dispatch = useTypedDispatch()
    const { filterProducts, selectedFilters } = useTypedSelector(filterSelector)
    const { selectedProduct } = useTypedSelector(productSelector)

    useEffect(() => {
        dispatch(fetchFilterProducts(selectedFilters))
    }, [selectedFilters])

    return (
        <>

            <Map
                width='100%'
                height='75vh'
                defaultState={{ 
                    center: selectedProduct.coordinates
                            ? [+selectedProduct.coordinates.split(' ')[0], +selectedProduct.coordinates.split(' ')[1]] 
                            : [55.726955, 37.582328],
                    zoom: 10,
                }}
            >
                <Clusterer
                    options={{
                        preset: 'islands#blueCircleIcon',
                        groupByCoordinates: false,
                        clusterDisableClickZoom: true,
                        clusterHideIconOnBalloonOpen: false,
                        geoObjectHideIconOnBalloonOpen: false
                    }}

                >

                    {!!filterProducts.length &&
                        filterProducts.map(product => {
                            if (selectedProduct && product._id === selectedProduct._id) {
                                return <Placemark
                                    key={product._id}
                                    geometry={[+product.coordinates.split(' ')[0], +product.coordinates.split(' ')[1]]}
                                    options={{ preset: 'islands#greenCircleDotIcon' }}
                                />
                            }
                            return <Placemark
                                key={product._id}
                                geometry={[+product.coordinates.split(' ')[0], +product.coordinates.split(' ')[1]]}
                                options={{ preset: 'islands#blueCircleIcon' }}
                            />
                        })}


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
        </>
    )
}

export default Maps;