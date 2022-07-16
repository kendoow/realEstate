import { FC } from 'react'

import { Header, PersonalAbout, PersonalData, PersonalMenu } from '../../components'

import styles from './Personal.module.scss'
const Personal: FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <div className={styles.Container}>
                <PersonalMenu />
                <PersonalAbout />
                <PersonalData />
            </div>
        </>
    )
}

export default Personal