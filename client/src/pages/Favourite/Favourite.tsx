import { FC } from "react";

import { Header } from "../../components";
import PersonalFavourite from "../../components/Personal/PersonalFavourite/PersonalFavourite";
import PersonalMenu from "../../components/Personal/PersonalMenu/PersonalMenu";

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