import { FC, useEffect, useState } from 'react'

import { Footer, Header, MainProducts, MainTitle } from '../../components'; 
import Filter from '../../UI/Filter/Filter';
import FilterMobile from '../../UI/Filter/FilterMobile/FilterMobile';
import Maps from '../../components/Maps/MainMap/MainMap';

import styles from './Main.module.scss';

const Main: FC = () => {
  return (
    <div className={styles.Container}>
        <Header />
         
        <div className={styles.Body}>
          <FilterMobile />
          <Filter />
          <MainTitle /> 
          <Maps />
          <MainProducts />
        </div>
        <Footer />
    </div>
  )
}

export default Main;