import { FC, useState } from "react";
import cn from 'classnames';

import ModalFilter from "./ModalFilter/ModalFilter";
import CustomSelect from "./CustomSelect/CustomSelect";
import CustomSelectInput from "./CustomSelect/CustomSelectInput/CustomSelectInput";

import styles from './Filter.module.scss';

import gps from '../../assets/Helpers/gps.svg';
import arrow from '../../assets/Helpers/select-arrow.svg';

const Filter: FC = () => {
    const [filterModal, setFilterModal] = useState<boolean>(false)

    const modalHandler = () => {
        setFilterModal(!filterModal)
    }

    return (
        <div className={styles.Container}>
            <div className={styles.Block}>
                <div className={styles.Text}>
                    Кол-во комнат
                </div>
                <CustomSelect
                    arrow={arrow}
                    values={Array(5).fill(0).map((v, i) => v = i + 1)} />
            </div>

            <div className={styles.Block}>
                <div className={cn(styles.Text, styles.Coffee)}>
                    <img
                        width={20}
                        height={20}
                        src={gps}
                        alt="Geo Icon" />
                    Москва
                </div>
                <input
                    type="text"
                    placeholder="Район, улица"
                    className={styles.Input} />
            </div>
            <div className={styles.Block}>
                <div className={styles.Text}>
                    Стоимость
                </div>
                <CustomSelectInput arrow={arrow} />
            </div>
            <div className={styles.Block}>
                <button
                    className={styles.BtnWhite}
                    onClick={modalHandler}>Ещё</button>
                <button className={styles.BtnCoffee}>Найти</button>
            </div>
            <div className={styles.Block}>
                <div></div>
                <button className={styles.Btn}>Показать на карте</button>
            </div>
            <ModalFilter
                active={filterModal}
                setActive={setFilterModal} />
        </div>
    )
}

export default Filter;