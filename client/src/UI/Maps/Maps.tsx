import { FC } from "react";
import cn from 'classnames';
import { FullscreenControl, Map, ZoomControl } from "react-yandex-maps";

import { MapsProps } from "./Maps.types";

import styles from './Maps.module.scss';

const Maps: FC<MapsProps> = ({ className, ...props }) => {

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
                <FullscreenControl />
                <ZoomControl options={{
                    size: 'small',
                    position: {
                        top: '20vh',
                        right: 10,
                        left: 'auto',
                        bottom: 'auto',
                    },
                }}/>
            </Map>
        </div >
    )
}

export default Maps;