import { FC, useState } from "react";
import cn from 'classnames';

import { CustomSelectProps } from "./CustomSelect.types";

import styles from './CustomSelect.module.scss';

const CustomSelect: FC<CustomSelectProps> = ({className,
                                              arrow, 
                                              values,
                                              ...props}) => {

    const [active, setActive] = useState<boolean>(false)
    const [selectedValue, setSelectedValue] = useState<typeof values[0]>(values[0])

    const activeHandler = () => {
        setActive(!active)
    }

    const selectedValueHandler = (v: typeof selectedValue) => {
        setSelectedValue(v)
    }
    
    return (
        <div 
         className={cn(className, styles.Container)}
         {...props}>
            <button 
             className={styles.SelectBtn}
             onClick={activeHandler}>
                {selectedValue}
                <img src={arrow} alt="Arrow Icon" />
            </button>
            <div className={cn(styles.BlockBtn, {
                [styles.Active]: active,
            })}>
                {values.filter(v => v !== selectedValue).map((v, i) => (
                    <button
                     key={i}
                     className={styles.Btn}
                     onClick={() => setSelectedValue(v)}>
                        {v}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default CustomSelect;