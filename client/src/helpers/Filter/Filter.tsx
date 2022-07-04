import { FC } from "react";
import cn from 'classnames';

import styles from './Filter.module.scss';

import gps from '../../assets/Helpers/gps.svg';

const Filter: FC = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Block}>
                <div className={styles.Text}>
                    Кол-во комнат
                </div>    
                <select className={styles.Select}>
                    {Array(5).fill(0).map((v, i) => v = i + 1).map((v, i) => 
                        <option key={i}>
                            {v}
                        </option>
                    )}
                </select>
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
                    Цена за сутки
                </div>    
                <select className={styles.Select}>

                </select>
            </div>
            <div className={styles.Block}>
                <button className={styles.BtnWhite}>Ещё</button>    
                <button className={styles.BtnCoffee}>Показать</button>    
            </div>
        </div>
    )
}

export default Filter;