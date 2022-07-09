import { FC } from "react";

import { Header } from "../../components";

import styles from './Favourite.module.scss';

const Favourite: FC = () => {
    return (
        <div className={styles.Container}>
            <Header />

            <div className={styles.Body}>
                Favorite 😍
            </div>
        </div>
    )
}

export default Favourite;