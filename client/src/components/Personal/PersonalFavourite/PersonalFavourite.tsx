import { FC, useEffect } from 'react';

import useTypedDispatch from '../../../hooks/useTypedDispatch';
import useTypedSelector from '../../../hooks/useTypedSelector';

import { fetchFavourite } from '../../../redux/Slices/FavouriteSlice/FavouriteSliceActionCreator';
import { authSelector } from '../../../redux/Slices/AuthSlice/AuthSelector';
import { favouriteSelector } from '../../../redux/Slices/FavouriteSlice/FavouriteSelector';

import MainProduct from '../../Main/MainProduct/MainProduct';
// import Spiner from '../../../helpers/Spiner/Spiner';

import styles from './PersonalFavourite.module.scss';

const PersonalFavourite: FC = () => {
    const dispatch = useTypedDispatch()
    const { favourite, error } = useTypedSelector(favouriteSelector)
    const { isAuth, user } = useTypedSelector(authSelector)

    useEffect(() => {
        isAuth && dispatch(fetchFavourite(user.id))
    }, [isAuth])

    return (
        <>
        
        <div className={styles.Container}>
        {/* <h2 className={styles.Title}>Ваше избранное</h2> */}
            {error && <h2 className={styles.Error}>{error}</h2> }
            {
                favourite && favourite.map(v => <MainProduct 
                                                 id={v._id}
                                                 key={v._id}
                                                 image={v.image}
                                                 price={v.price}
                                                 priceDay={v.priceDay}
                                                 rooms={v.rooms}
                                                 metro={v.metro}
                                                 description={v.description}
                                                 address={v.address} />)
            }
            {/* {loading && <div className={styles.Spiner}> <Spiner /></div>} */}

        </div>
        </>
  )
}

export default PersonalFavourite