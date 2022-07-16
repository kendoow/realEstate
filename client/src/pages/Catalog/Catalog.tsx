import { FC } from 'react'

import { CatalogItems, Footer, Header } from '../../components';

const Catalog: FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <CatalogItems />
            <Footer/>
        </>
    )
}

export default Catalog;