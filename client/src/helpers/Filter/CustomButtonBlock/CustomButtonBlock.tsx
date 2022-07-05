import { FC, useState } from "react";
import cn from 'classnames';

import { CustomButtonBlockProps } from "./CustomButtonBlock.types";

import styles from './CustomButtonBlock.module.scss';

const CustomButtonBlock: FC<CustomButtonBlockProps> = ({className, values, ...props}) => {
    const [selectedButton, setSelectedButton] =  useState<string | boolean>(false)

    const clickHandler = (value: string) => {
        value === selectedButton ? setSelectedButton(false)
                                         : setSelectedButton(value)
    }   

    return (
        <div 
        
         className={cn(className, styles.Container)}
         {...props}>
            {values.map((v, i) => (
                <button
                 key={i} 
                 className={cn(styles.Btn, {
                    [styles.Active]: v === selectedButton,
                 })}
                 onClick={() => clickHandler(v)}>
                    {v}
                 </button>
            ))}
        </div>
    )
}

export default CustomButtonBlock;