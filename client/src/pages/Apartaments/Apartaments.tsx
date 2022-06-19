import { FC } from 'react'

import { Footer, Header } from '../../components'
import ApartamentsItems from '../../components/Apartaments/ApartamentsItems/ApartamentsItems'
import RecommendProducts from '../../components/Apartaments/RecentProducts/RecommendProducts'
import CommentItems from '../../components/Apartaments/СommentItems/СommentItems'

import styles from './Apartaments.module.scss'


const Apartaments: FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <div className={styles.Container}>
                <ApartamentsItems />
                <CommentItems />    
                <RecommendProducts />
            </div>
            <Footer />
        </>            
    )
}

export default Apartaments;