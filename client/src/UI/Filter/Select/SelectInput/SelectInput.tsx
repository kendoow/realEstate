import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import cn from 'classnames';

import useOnClickOutside from "../../../../hooks/useOnClickOutside";

import { SelectInputProps } from "./SelectInput.types";

import styles from './SelectInput.module.scss';

const SelectInput: FC<SelectInputProps> = ({ className,
    selectedValue,
    setSelectedValue,
    arrow,
    ...props }) => {
    const [active, setActive] = useState<boolean>(false)
    const ref = useRef(null)

    const [priceFrom, setPriceFrom] = useState<string>('')
    const [priceTo, setPriceTo] = useState<string>('')

    useEffect(() => {
        if (!selectedValue) {
            setPriceFrom('')
            setPriceTo('')
        }
    }, [selectedValue])

    useEffect(() => {
        priceFrom && priceTo && setSelectedValue(`${priceFrom} - ${priceTo}`)
    }, [priceFrom, priceTo])

    const activeHandler = () => {
        setActive(!active)
    }
    const closeHandler = () => {
        setActive(false)
    }

    useOnClickOutside(ref, () => closeHandler())

    const priceFromHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPriceFrom(e.target.value)
    }

    const priceToHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPriceTo(e.target.value)
    }



    return (
        <div
            ref={ref}
            className={styles.Container}
            {...props}>
            <button
                className={styles.BtnSelected}
                onClick={activeHandler}>
                {selectedValue ? <>{selectedValue}</> : <>Неважно &nbsp;</>}
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

export default SelectInput;