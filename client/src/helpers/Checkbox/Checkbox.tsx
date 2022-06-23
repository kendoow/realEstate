import { FC, useState } from 'react'
import styles from './Checkbox.module.scss'
import { InputProps } from './Checkbox.types'

const Checkbox: FC<InputProps> = ({ text }): JSX.Element => {

    const [isChecked, setIsChecked] = useState<boolean>(false)
    return (
        <>  <div className={styles.Container}>
            <label>
                <input  type='checkbox' onChange={() => {
                    setIsChecked(!isChecked);
                }} />
                <span
                    className={`Checkbox ${isChecked ? 'active' : 'inActive'}`}
                    aria-hidden="true"
                />
                {text}
            </label>
        </div>
        </>
    )
}

export default Checkbox