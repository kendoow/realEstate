import { FC, useEffect } from 'react';

import useTypedDispatch from '../../../hooks/useTypedDispatch';
import useTypedSelector from '../../../hooks/useTypedSelector';

import { fetchFavourite } from '../../../redux/Slices/FavouriteSlice/FavouriteActionCreator';
import { authSelector } from '../../../redux/Slices/AuthSlice/AuthSelector';
import { favouriteSelector } from '../../../redux/Slices/FavouriteSlice/FavouriteSelector';

import MainProduct from '../../Main/MainProduct/MainProduct';
// import Spiner from '../../../helpers/Spiner/Spiner';

import styles from './PersonalFavourite.module.scss';

const PersonalFavourite: FC = () => {
    const dispatch = useTypedDispatch()
    const { favourite, error } = useTypedSelector(favouriteSelector)
    const { user } = useTypedSelector(authSelector)

    useEffect(() => {
        user && dispatch(fetchFavourite(user.id))
    }, [user])

    return (
        <>
        
        <div className={styles.Container}>
        {/* <h2 className={styles.Title}>Ваше избранное</h2> */}
            {error && <h2 className={styles.Error}>{error}</h2> }
            {
                favourite && favourite.map(product => <MainProduct key={product._id} id={product._id} {...product} />)
            }
            {/* {loading && <div className={styles.Spiner}> <Spiner /></div>} */}

        </div>
        </>
  )
}

export default PersonalFavourite