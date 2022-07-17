import { FC, useState } from "react";
import cn from 'classnames';
import { useNavigate } from "react-router-dom";

import useTypedDispatch from "../../hooks/useTypedDispatch";
import { addSelectedFilters } from "../../redux/Slices/FilterSlice/FilterSlice";

import {
    translateHomeFilters,
    translateLanguageFilters,
    translateNecessaryFilters,
    translateSpecificationsFilters
} from "../../utils/translateFilters";

import ModalFilter from "./ModalFilter/ModalFilter";
import Select from "./Select/Select";
import SelectInput from "./Select/SelectInput/SelectInput";

import styles from './Filter.module.scss';

import gps from '../../assets/Helpers/gps.svg';
import arrow from '../../assets/Helpers/select-arrow.svg';

const Filter: FC = () => {
    const navigate = useNavigate()
    const dispatch = useTypedDispatch()
    const [filterModal, setFilterModal] = useState<boolean>(false)

    const modalHandler = () => {
        setFilterModal(!filterModal)
    }

    const [rooms, setRooms] = useState<string>('Неважно')
    const [floor, setFloor] = useState<string>('Неважно')
    const [rating, setRating] = useState<string>('Неважно')

    const [specifications, setSpecifications] = useState<string[]>([])
    const [necessary, setNecessary] = useState<string[]>([])
    const [language, setLanguage] = useState<string[]>([])
    const [home, setHome] = useState<string[]>([])

    const [price, setPrice] = useState<string | boolean>(false)
    const [balcony, setBalcony] = useState<string | boolean>(false)
    const [animals, setAnimals] = useState<string | boolean>(false)
    const [bedrooms, setBedrooms] = useState<string | boolean>(false)

    const searchHandler = () => {
        const filterCommon = {
            rooms,
            floor,
            rating,

            price: typeof price === 'string' ? price : undefined,
            balcony: typeof balcony === 'string' ? balcony : undefined,
            animals: animals == 'Eсть' ? true : undefined,
            bedrooms: typeof bedrooms === 'string' ? bedrooms : undefined,
        }
        const filterSpecifications = translateSpecificationsFilters(specifications)
        const filterNecessary = translateNecessaryFilters(necessary)
        const filterLanguage = translateLanguageFilters(language)
        const filterHome = translateHomeFilters(home)
        dispatch(addSelectedFilters({
            ...filterCommon,
            ...filterSpecifications,
            ...filterNecessary,
            ...filterLanguage,
            ...filterHome,
        }))

        setFilterModal(false)
        resetHandler()
        new Promise(resolve => resolve(navigate('/catalog')))
    }

    const resetHandler = () => {
        setRooms('Неважно')
        setFloor('Неважно')
        setRating('Неважно')
        setSpecifications([])
        setNecessary([])
        setLanguage([])
        setHome([])
        setBalcony(false)
        setAnimals(false)
        setBedrooms(false)
    }

    return (
        <div className={styles.Container}>
            <div className={styles.Block}>
                <div className={styles.Text}>
                    Кол-во комнат
                </div>
                <Select
                    className={styles.Select}
                    selectedValue={rooms}
                    setSelectedValue={setRooms}
                    arrow={arrow}
                    values={['Неважно', '1', '2', '3', '4', '5',]} />
            </div>

            <div className={styles.Block}>
                <div className={cn(styles.Text, styles.Coffee)}>
                    <img
                        width={20}
                        height={20}
                        src={gps}
                        alt="Geo Icon" />
                    Москва
                </div>
                <input
                    type="text"
                    placeholder="Район, улица"
                    className={styles.Input} />
            </div>
            <div className={styles.Block}>
                <div className={styles.Text}>
                    Стоимость
                </div>
                <SelectInput
                    className={styles.Select}
                    selectedValue={price}
                    setSelectedValue={setPrice} 
                    arrow={arrow}
                />
            </div>
            <div className={styles.Block}>
                <button
                    className={styles.BtnWhite}
                    onClick={modalHandler}
                >
                    Ещё
                </button>
                <button
                    onClick={searchHandler}
                    className={styles.BtnCoffee}
                >
                    Найти
                </button>
            </div>
            <div className={styles.Block}>
                <div></div>
                <button className={styles.Btn}>Показать на карте</button>
            </div>
            <ModalFilter
                active={filterModal}
                setActive={setFilterModal}
                searchHandler={searchHandler}
                resetHandler={resetHandler}

                rating={rating}
                floor={floor}
                setRating={setRating}
                setFloor={setFloor}

                specifications={specifications}
                necessary={necessary}
                language={language}
                home={home}
                setSpecifications={setSpecifications}
                setNecessary={setNecessary}
                setLanguage={setLanguage}
                setHome={setHome}

                balcony={balcony}
                animals={animals}
                bedrooms={bedrooms}
                setBalcony={setBalcony}
                setAnimals={setAnimals}
                setBedrooms={setBedrooms}
            />
        </div>
    )
}

export default Filter;