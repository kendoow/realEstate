import { FC, MouseEvent, useEffect } from "react";
import cn from 'classnames';

import Rating from "../../Rating/Rating";
import SelectButton from "../Select/SelectButton/SelectButton";
import SelectCheckBox from "../Select/SelectCheckBox/SelectCheckBox";
import Select from "../Select/Select";

import { ModalFilterProps } from "./ModalFilter.types";

import styles from './ModalFilter.module.scss';

import arrow from '../../../assets/Helpers/select-arrow.svg'

const ModalFilter: FC<ModalFilterProps> = ({ className,
    active,
    setActive,
    searchHandler,
    resetHandler,

    floor,
    rating,
    setFloor,
    setRating,

    specifications,
    necessary,
    language,
    home,
    setSpecifications,
    setNecessary,
    setLanguage,
    setHome,

    balcony,
    animals,
    bedrooms,
    setBalcony,
    setAnimals,
    setBedrooms,
    ...props }) => {
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
                        <Select
                            selectedValue={floor}
                            setSelectedValue={setFloor}
                            className={styles.Select}
                            arrow={arrow}
                            values={['Неважно', '1', '2', '3', '4', '5']} />
                    </div>
                    <div className={styles.BlockText}>
                        <div className={styles.Text}>Обустройство дома</div>
                        <SelectCheckBox
                            selectedValues={home}
                            setSelectedValues={setHome}
                            className={styles.SelectCheckBox}
                            arrow={arrow}
                            values={['Огороженная территория',
                                'Парковка крытая',
                                'Стояночное место',
                                'Виодеонаблюдение']} />
                    </div>
                    <div className={styles.BlockText}>
                        <div className={styles.Text}>Балкон</div>
                        <SelectButton
                            selectedValue={balcony}
                            setSelectedValue={setBalcony}
                            values={['Есть', 'Нет', 'Лоджия']}
                        />
                    </div>


                    <div className={styles.BlockText}>
                        <div className={styles.Text}>Домашние животные</div>
                        <SelectButton
                            selectedValue={animals}
                            setSelectedValue={setAnimals}
                            values={['Есть', 'Нет']}
                        />
                    </div>
                    <div className={styles.BlockText}>
                        <div className={styles.Text}>Спальни</div>
                        <SelectButton
                            selectedValue={bedrooms}
                            setSelectedValue={setBedrooms}
                            values={['Неважно', '1', '2', '3', '4 +']}
                        />
                    </div>

                    <div className={styles.BlockText}>
                        <div className={styles.Text}>Язык хозяина</div>
                        <SelectCheckBox
                            selectedValues={language}
                            setSelectedValues={setLanguage}
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
                        <SelectCheckBox
                            selectedValues={specifications}
                            setSelectedValues={setSpecifications}
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
                        <SelectCheckBox
                            selectedValues={necessary}
                            setSelectedValues={setNecessary}
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
                        <Rating
                            filterRating={rating} 
                            setFilterRating={setRating} 
                            isEditable={true}
                        />
                    </div>
                </div>
                <div className={styles.BlockBtn}>
                    <button
                        className={styles.BtnExit}
                        onClick={resetHandler}
                    >
                        Сбросить фильтры
                    </button>
                    <button
                        className={styles.BtnShow}
                        onClick={searchHandler}
                    >
                        Найти
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalFilter;