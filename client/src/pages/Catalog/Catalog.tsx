import { FC } from 'react'

import { Footer, Header } from '../../components';
import CatalogItems from '../../components/Catalog/CatalogItems/CatalogItems';


const Catalog: FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <CatalogItems/>
            <Footer/>
        </>
    )
}

export default Catalog;