import { ChangeEvent, FC, MouseEvent, useEffect, useState } from "react";
import cn from 'classnames';

import { CustomSelectInputProps } from "./CustomSelectInput.types";

import styles from './CustomSelectInput.module.scss';

const CustomSelectInput: FC<CustomSelectInputProps> = ({className, 
                                                        arrow, 
                                                        ...props}) => {
    const [active, setActive] = useState<boolean>(false)
    const [selectedValue, setSelectedValue] = useState<boolean | string>(false)

    const [priceFrom, setPriceFrom] = useState<number>()
    const [priceTo, setPriceTo] = useState<number>()
    
    useEffect(() => {
        priceFrom && priceTo && setSelectedValue(`${priceFrom} - ${priceTo}`)
    }, [priceFrom, priceTo])
    const activeHandler = () => {
        setActive(!active)
    }

    const priceFromHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPriceFrom(+e.target.value)
    }
    
    const priceToHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPriceTo(+e.target.value)
    }
    

    return (
        <div 
        
         className={styles.Container}
         {...props}>
            <button 
             className={styles.BtnSelected}
             onClick={activeHandler}>
                {selectedValue ? <>{selectedValue}</> : <>Любая</>}
                <img src={arrow} alt="" />
            </button>
            <div className={cn(styles.BlockInput, {
                [styles.Active]: active,
            })}>
                <input 
                 type="number"
                 placeholder="Цена от"
                 value={priceFrom}
                 onChange={priceFromHandler} />
                <input 
                 type="number"
                 placeholder="Цена до"
                 value={priceTo}
                 onChange={priceToHandler} />
            </div>
        </div>
    )
}

export default CustomSelectInput;