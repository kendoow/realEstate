import { FC } from "react";

import { Header, PersonalFavourite, PersonalMenu } from "../../components";

import styles from './Favourite.module.scss';

const Favourite: FC = () => {
    return (
        <div className={styles.Container}>
            <Header />

            <div className={styles.Body}>
                <PersonalMenu />
                <PersonalFavourite /> 
            </div>
        </div>
    )
}

export default Favourite;