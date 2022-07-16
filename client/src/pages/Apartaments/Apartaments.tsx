import { FC } from 'react'

import { ApartamentsItems, CommentItems, Footer, Header, RecentProducts } from '../../components'

import styles from './Apartaments.module.scss'


const Apartaments: FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <div className={styles.Container}>
                <ApartamentsItems />
                <CommentItems />    
                <RecentProducts />
            </div>
            <Footer />
        </>            
    )
}

export default Apartaments;