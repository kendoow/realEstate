import { FC, MouseEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import cn from 'classnames';

import Rating from "../../Rating/Rating";
import CustomButtonBlock from "../CustomButtonBlock/CustomButtonBlock";
import CustomSelectCheckBox from "../CustomSelect/CustomSelectCheckBox/CustomSelectCheckBox";

import { ModalFilterProps } from "./ModalFilter.types";

import styles from './ModalFilter.module.scss';

import arrow from '../../../assets/Helpers/select-arrow.svg'
import CustomSelect from "../CustomSelect/CustomSelect";

const ModalFilter: FC<ModalFilterProps> = ({ className, active, setActive, ...props }) => {
    const activeHandler = (e: MouseEvent<HTMLDivElement> |
        MouseEvent<HTMLAnchorElement> |
        MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget === e.target) setActive(!active)
    }

    useEffect(() => {
        document.body.style.overflow = active ? 'hidden' : 'auto'
    }, [active])

    return (
        <div
            className={cn(styles.Container, className, {
                [styles.Active]: active
            })}
            onClick={activeHandler}
            {...props}>
            <div className={styles.Content}>
                <h2 className={styles.Title}>Фильтры</h2>
                <div className={styles.BlockInput}>
                    <div className={styles.BlockText}>
                        <div className={styles.Text}>Этаж</div>
                        <CustomSelect
                            className={styles.Select}
                            arrow={arrow}
                            values={['Неважно', 1, 2, 3, 4, 5]} />
                    </div>
                    <div className={styles.BlockText}>
                        <div className={styles.Text}>Обустройство дома</div>
                        <CustomSelectCheckBox
                            className={styles.SelectCheckBox}
                            arrow={arrow}
                            values={['Огороженная территория',
                                'Парковка крытая',
                                'Стояночное место',
                                'Виодеонаблюдение']} />
                    </div>
                    <div className={styles.BlockText}>
                        <div className={styles.Text}>Балкон</div>
                        <CustomButtonBlock values={['Есть', 'Нет', 'Лоджия']} />
                    </div>


                    <div className={styles.BlockText}>
                        <div className={styles.Text}>Домашние животные</div>
                        <CustomButtonBlock values={['Есть', 'Нет']} />
                    </div>
                    <div className={styles.BlockText}>
                        <div className={styles.Text}>Спальни</div>
                        <CustomButtonBlock values={['Неважно', '1', '2', '3', '4 +']} />
                    </div>

                    <div className={styles.BlockText}>
                        <div className={styles.Text}>Язык хозяина</div>
                        <CustomSelectCheckBox
                            className={styles.SelectCheckBox}
                            arrow={arrow}
                            values={[
                                'Русский',
                                'Немецкий',
                                'Французский',
                                'Японский',
                                'Английский']} />
                    </div>

                    <div className={styles.BlockText}>
                        <div className={styles.Text}>Характеристики</div>
                        <CustomSelectCheckBox
                            className={styles.SelectCheckBox}
                            arrow={arrow}
                            values={['Бассейн',
                                'Бесплатная парковка на территории',
                                'Кроватка',
                                'Зона барбекю',
                                'Камин',
                                'Джакузи',
                                'Зарядка для электромобиля',
                                'Спортзал',
                                'Завтрак',
                                'Можно курить']} />
                    </div>

                    <div className={styles.BlockText}>
                        <div className={styles.Text}>Самое необходимое</div>
                        <CustomSelectCheckBox
                            className={styles.SelectCheckBox}
                            arrow={arrow}
                            values={['WI-FI',
                                'Стиральная Машина',
                                'Кондиционер',
                                'Отопление',
                                'Телевизор',
                                'Кухня',
                                'Сущильная машина',
                                'Рабочая зона',
                            ]} />
                    </div>

                    <div className={styles.BlockText}>
                        <div className={styles.Text}>Количество Звезд</div>
                        <div>
                            <Rating isEditable={true} initialRating={3} />
                        </div>
                    </div>

                </div>
                <div className={styles.BlockBtn}>
                    <button
                        className={styles.BtnExit}
                        // onClick={activeHandler}
                        >
                        Сбросить фильтры
                    </button>
                    <Link
                        to='/catalog'
                        className={styles.BtnShow}
                        onClick={activeHandler}>
                        Найти
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ModalFilter;