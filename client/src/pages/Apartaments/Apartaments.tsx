import { FC } from 'react'
import { Header } from '../../components'
import ApartamentsItem from '../../components/Apartaments/ApartamentsItem/ApartamentsItem'
import ApartamentsItems from '../../components/Apartaments/ApartamentsItems/ApartamentsItems'
import useTypedSelector from '../../hooks/useTypedSelector'
import styles from './Apartaments.module.scss'


const Apartaments: FC = (): JSX.Element => {

    return (
        <>

            <Header />
            <div className={styles.container}>
                <ApartamentsItems />
                
            </div>
        </>
    )
}

export default Apartaments