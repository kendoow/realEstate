import { FC, useState } from "react";
import cn from 'classnames';
import { useNavigate } from "react-router-dom";

import useTypedDispatch from "../../../hooks/useTypedDispatch";
import {
    translateHomeFilters,
    translateLanguageFilters,
    translateNecessaryFilters,
    translateSpecificationsFilters
} from "../../../utils/translateFilters";
import { addSelectedFilters } from "../../../redux/Slices/FilterSlice/FilterSlice";

import ModalFilterMobile from "../ModalFilterMobile/ModalFilterMobile";

import { FilterMobileProps } from "./FilterMobile.types";

import styles from './FilterMobile.module.scss';

import seacrh from '../../../assets/Helpers/search.svg';

const FilterMobile: FC<FilterMobileProps> = ({
    className,
    ...props
}) => {
    const dispatch = useTypedDispatch()
    const navigate = useNavigate()
    const [activeModal, setActiveModal] = useState<boolean>(false)
    const activeModalHandler = () => {
        setActiveModal(true)
    }

    const [rooms, setRooms] = useState<string>('Неважно')
    const [floor, setFloor] = useState<string>('Неважно')
    const [rating, setRating] = useState<string>('3')

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
            animals: animals === 'Eсть' ? true : undefined,
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

        setActiveModal(false)
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
        <div
            className={cn(styles.Container, className)}
            {...props}
        >
            <input
                type="text"
                placeholder="Район, улица"
                className={styles.Input}
            />
            <img
                className={styles.Image}
                src={seacrh}
                alt="Search Icon"
            />

            <button
                className={styles.Btn}
                onClick={activeModalHandler}
            >
                Еще
            </button>
            <ModalFilterMobile
                active={activeModal}
                setActive={setActiveModal}
                resetHandler={resetHandler}
                searchHandler={searchHandler}

                rooms={rooms}
                floor={floor}
                rating={rating}
                setRooms={setRooms}
                setFloor={setFloor}
                setRating={setRating}

                specifications={specifications}
                necessary={necessary}
                language={language}
                home={home}
                setSpecifications={setSpecifications}
                setNecessary={setNecessary}
                setLanguage={setLanguage}
                setHome={setHome}

                price={price}
                balcony={balcony}
                animals={animals}
                bedrooms={bedrooms}
                setPrice={setPrice}
                setBalcony={setBalcony}
                setAnimals={setAnimals}
                setBedrooms={setBedrooms}
            />
        </div>
    )
}

export default FilterMobile;