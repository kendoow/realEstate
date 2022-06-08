import { FC } from "react";

import styles from './MainTitle.module.scss';

const MainTitle: FC = () => {
    return (
        <div className={styles.Container}>
            <h1 className={styles.Title}>Отельный комфорт по доступным ценам</h1>
            <div className={styles.Desrc}>Посвятите себя важным делам, остальное мы возмём на себя</div>
            <button className={styles.Btn}>Хочу попробовать</button>
        </div>
    )
}

export default MainTitle;