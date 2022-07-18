import { FC } from "react";
import cn from 'classnames';

import Select from "../Select/Select";
import SelectInput from "../Select/SelectInput/SelectInput";
import SelectCheckBox from "../Select/SelectCheckBox/SelectCheckBox";
import SelectButton from "../Select/SelectButton/SelectButton";
import Rating from "../../Rating/Rating";

import { ModalFilterMobileProps } from "./ModalFilterMobile.types";

import styles from './ModalFilterMobile.module.scss';

import close from '../../../assets/Main/close.svg';
import arrow from '../../../assets/Helpers/select-arrow.svg';

const ModalFilterMobile: FC<ModalFilterMobileProps> = ({
    className,
    active,
    setActive,
    resetHandler,
    searchHandler,

    rooms,
    floor,
    rating,

    setRooms,
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

    price,
    balcony,
    animals,
    bedrooms,

    setPrice,
    setBalcony,
    setAnimals,
    setBedrooms,
    ...props
}) => {
    const closeHandler = () => {
        setActive(false)
    }

    return (
        <div
            className={cn(className, styles.Container, {
                [styles.Active]: active,
            })}
            {...props}
        >
            <div className={styles.Content}>
                <div className={styles.BlockTitle}>
                    <h2 className={styles.Title}>Фильтры</h2>
                    <img
                        onClick={closeHandler}
                        src={close}
                        alt="Close Icon"
                    />
                </div>
                <div className={styles.BlockFilter}>
                    <div className={styles.Block}>
                        <div className={styles.Name}>Количество комнат</div>
                        <Select
                            className={styles.Select}
                            selectedValue={rooms}
                            setSelectedValue={setRooms}
                            arrow={arrow}
                            values={['Неважно', '1', '2', '3', '4', '5',]}
                        />
                    </div>
                </div>
                <div className={styles.BlockFilter}>
                    <div className={styles.Block}>
                        <div className={styles.Name}>Стоимость</div>
                        <SelectInput
                            className={styles.Select}
                            selectedValue={price}
                            setSelectedValue={setPrice}
                            arrow={arrow}
                        />
                    </div>
                </div>
                <div className={styles.BlockFilter}>
                    <div className={styles.Block}>
                        <div className={styles.Name}>Этаж</div>
                        <Select
                            selectedValue={floor}
                            setSelectedValue={setFloor}
                            className={styles.Select}
                            arrow={arrow}
                            values={['Неважно', '1', '2', '3', '4', '5']}
                        />
                    </div>
                </div>
                <div className={styles.BlockFilter}>
                    <div className={styles.Block}>
                        <div className={styles.Name}>Обустройство дома</div>
                        <SelectCheckBox
                            selectedValues={home}
                            setSelectedValues={setHome}
                            className={styles.SelectCheckBox}
                            arrow={arrow}
                            values={[
                                'Огороженная территория',
                                'Парковка крытая',
                                'Стояночное место',
                                'Виодеонаблюдение']}
                        />
                    </div>
                </div>
                <div className={styles.BlockFilter}>
                    <div className={styles.Block}>
                        <div className={styles.Name}>Балкон</div>
                        <SelectButton
                            className={styles.SelectBtn}
                            selectedValue={balcony}
                            setSelectedValue={setBalcony}
                            values={['Есть', 'Нет', 'Лоджия']}
                        />
                    </div>
                </div>
                <div className={styles.BlockFilter}>
                    <div className={styles.Block}>
                        <div className={styles.Name}>Домашние животные</div>
                        <SelectButton
                            className={styles.SelectBtn}
                            selectedValue={animals}
                            setSelectedValue={setAnimals}
                            values={['Есть', 'Нет']}
                        />
                    </div>
                </div>
                <div className={styles.BlockFilter}>
                    <div className={styles.Block}>
                        <div className={styles.Name}>Спальни</div>
                        <SelectButton
                            className={styles.SelectBtn}
                            selectedValue={bedrooms}
                            setSelectedValue={setBedrooms}
                            values={['Неважно', '1', '2', '3', '4 +']}
                        />
                    </div>
                </div>
                <div className={styles.BlockFilter}>
                    <div className={styles.Block}>
                        <div className={styles.Name}>Язык хозяина</div>
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
                                'Английский']}
                        />
                    </div>
                </div>
                <div className={styles.BlockFilter}>
                    <div className={styles.Block}>
                        <div className={styles.Name}>Характеристики</div>
                        <SelectCheckBox
                            selectedValues={specifications}
                            setSelectedValues={setSpecifications}
                            className={styles.SelectCheckBox}
                            arrow={arrow}
                            values={[
                                'Бассейн',
                                'Бесплатная парковка на территории',
                                'Кроватка',
                                'Зона барбекю',
                                'Камин',
                                'Джакузи',
                                'Зарядка для электромобиля',
                                'Спортзал',
                                'Завтрак',
                                'Можно курить']}
                        />
                    </div>
                </div>
                <div className={styles.BlockFilter}>
                    <div className={styles.Block}>
                        <div className={styles.Name}>Самое необходимое</div>
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
                            ]}
                        />
                    </div>
                </div>
                <div className={styles.BlockFilter}>
                    <div className={styles.Block}>
                        <div className={styles.Name}>Количество звед</div>
                        <Rating
                            filterRating={rating}
                            setFilterRating={setRating}
                            isEditable={true}
                        />
                    </div>
                </div>

                <div className={styles.BlockBtn}>
                    <button className={styles.BtnExit}>Сбросить</button>
                    <button className={styles.BtnShow}>Найти</button>
                </div>
            </div>
        </div>
    )
}

export default ModalFilterMobile;