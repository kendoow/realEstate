import { FC, useEffect } from "react";

import { Clusterer, FullscreenControl, Map, Placemark, ZoomControl } from "react-yandex-maps";



import useTypedDispatch from "../../hooks/useTypedDispatch";
import { fetchProductsAll } from "../../redux/Slices/ProductsSlice/ProductsActionCreator";
import useTypedSelector from "../../hooks/useTypedSelector";

import { filterSelector } from "../../redux/Slices/FilterSlice/FilterSelector";
import { fetchFilterProducts } from "../../redux/Slices/FilterSlice/FilterActionCreator";

const Maps: FC = ({ ...props }) => {

    const dispatch = useTypedDispatch()
    const { filterProducts, selectedFilters } = useTypedSelector(filterSelector)

    useEffect(() => {
        dispatch(fetchFilterProducts(selectedFilters))
    }, [selectedFilters])





    return (
        <>

            <Map
                width='100%'
                height='75vh'
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

                    {!!filterProducts.length &&
                        filterProducts.map((product, i) =>
                            <Placemark
                                key={product._id}
                                geometry={[+product.coordinates.split(' ')[0], +product.coordinates.split(' ')[1]]}
                                // properties={getPointData(i)}
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
        </>
    )
}

export default Maps;