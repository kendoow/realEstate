import { FC, Fragment, MouseEvent, useRef, useState } from "react";
import cn from 'classnames';

import useOnClickOutside from "../../../../hooks/useOnClickOutside";

import { CustomSelectCheckBoxProps } from "./CustomSelectCheckBox.types";

import styles from './CustomSelectCheckBox.module.scss';

const CustomSelectCheckBox: FC<CustomSelectCheckBoxProps> = ({className, 
                                              values,
                                              arrow,
                                              ...props}) => {
        const ref = useRef(null)
        const [active, setActive] = useState<boolean>(false)
        const [selectedValue, setSelectedValue] = useState<typeof values[0]>(values[0])

        const activeHandler = () => {
            setActive(!active)
        }

        const closeHandler = () => {
            setActive(false)
        }
        useOnClickOutside(ref, () => closeHandler())

        const selectedValueHandler = (value: string | number) => {
            setSelectedValue(value)
        }

        return (

        <div 
         ref={ref}
         className={cn(className, styles.Container)}
         {...props}>
            <button 
             className={styles.BtnTitle}
             onClick={activeHandler}>
                {selectedValue}
                <img src={arrow} alt="Select Icon" />
            </button>
            <div className={cn(styles.BlockBtn, {
                [styles.Active]: active
            })}>
                {values.slice(1).map((v, i) => (
                    <div
                     className={styles.Btn} 
                     key={i}>
                        <input type='checkbox'/>
                        <button 
                         className={cn(styles.BtnItem, {
                            [styles.Active]: selectedValue === v,
                         })}
                         onClick={() => selectedValueHandler(v)}>
                            {v}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CustomSelectCheckBox;