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
        const [selectedValues, setSelectedValues] = useState<typeof values[0][]>([])                                                

        const activeHandler = () => {
            setActive(!active)
        }
        const closeHandler = () => {
            setActive(false)
        }
        useOnClickOutside(ref, () => closeHandler())

        const selectedValueHandler = (value: string | number) => {
            if (selectedValues.find(v => v === value)) {
                setSelectedValues(selectedValues.filter(v => v !== value))
            } else {
                setSelectedValues([...selectedValues, value])
            }
        }

        return (

        <div 
         ref={ref}
         className={cn(className, styles.Container)}
         {...props}>
            <button 
             className={styles.BtnTitle}
             onClick={activeHandler}>
                {
                    selectedValues.length ? <>
                                                Выбран{selectedValues.length !== 1 && <>о</>} {selectedValues.length}
                                                &nbsp;фильтр{selectedValues.length < 5 
                                                        ? selectedValues.length === 1 
                                                        ? null 
                                                        : <>а</> 
                                                        : <>ов</>}
                                            </>
                                          : <>Неважно</>
                }
                <img src={arrow} alt="Select Icon" />
            </button>
            <div className={cn(styles.BlockBtn, {
                [styles.Active]: active
            })}>
                {values.map((v, i) => (
                    <div
                     className={styles.Btn} 
                     key={i}>
                        <input 
                            type='checkbox'
                            checked={!!selectedValues.find(value => value === v)}
                            onChange={() => selectedValueHandler(v)}
                        />
                        <button 
                            className={styles.BtnItem}
                            onClick={() => selectedValueHandler(v)}
                        >
                            {v}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CustomSelectCheckBox;