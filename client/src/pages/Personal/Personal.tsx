import React, { FC } from 'react'
import { Header } from '../../components'
import PersonalAbout from '../../components/Personal/PersonalAbout/PersonalAbout'
import PersonalData from '../../components/Personal/PersonalData/PersonalData'
import PersonalMenu from '../../components/Personal/PersonalMenu/PersonalMenu'
import styles from './Personal.module.scss'
const Personal: FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <PersonalMenu />
                <PersonalAbout />
                <PersonalData/>
            </div>
        </>
    )
}

export default Personal