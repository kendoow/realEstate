import { FC, useRef, useState } from "react";
import cn from 'classnames';

import useTypedDispatch from "../../../hooks/useTypedDispatch";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { addSelectedFilters } from "../../../redux/Slices/FilterSlice/FilterSlice";

import { CustomSelectProps } from "./CustomSelect.types";

import styles from './CustomSelect.module.scss';

const CustomSelect: FC<CustomSelectProps> = ({ className,
    name,
    arrow,
    values,
    ...props }) => {

    const dispatch = useTypedDispatch()
    const ref = useRef(null)
    const [active, setActive] = useState<boolean>(false)
    const [selectedValue, setSelectedValue] = useState<string>(values[0])

    const activeHandler = () => {
        setActive(!active)
    }

    const selectedValueHandler = (v: string) => {
        setSelectedValue(v)
        dispatch(addSelectedFilters({[name]: v}))
    }

    const closeHanlder = () => {
        setActive(false)
    }
    useOnClickOutside(ref, () => closeHanlder())

    return (
        <div
            ref={ref}
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
                        onClick={() => selectedValueHandler(v)}>
                        {v}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default CustomSelect;