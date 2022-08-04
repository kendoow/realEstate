import { FC } from 'react'
import { Footer, Header } from '../../components'
import MapFliltred from '../../components/Maps/MapFiltred/MapFliltred'
import Filter from '../../UI/Filter/Filter'
import FilterMobile from '../../UI/Filter/FilterMobile/FilterMobile'

import styles from './Map.module.scss'


const Map: FC = () => {
    return (
        <>
            <div className={styles.Container}>
                <Header />
                <div className={styles.Body}>
                    <Filter />
                    <FilterMobile />

                    <MapFliltred />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Map