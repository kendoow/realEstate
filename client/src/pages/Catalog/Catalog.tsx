import { FC } from 'react'

import { Header } from '../../components';
import CatalogItems from '../../components/Catalog/CatalogItems/CatalogItems';


const Catalog: FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <CatalogItems/>
        </>
    )
}

export default Catalog;