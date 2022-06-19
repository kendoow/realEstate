import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useTypedSelector from "../../../hooks/useTypedSelector";
import useTypedDispatch from "../../../hooks/useTypedDispatch";
import { fetchComments, fetchCommentsFirst } from "../../../redux/Slices/CommentsSlice/CommentsActionCreator";

import { PaginationTypes } from "../../../redux/Slices/ProductsSlice/ProductsSlice.types";

import Spiner from "../../../helpers/Spiner/Spiner";
import CommentItem from '../СommentItem/СommentItem';

import styles from './СommentItems.module.scss';

const СommentItems: FC = () => {
    const {loading, error, comments} = useTypedSelector(state => state.commentsReducer)
    const { id } = useParams()
    const [pagination, setPagination] = useState<PaginationTypes>({page: 2, limit: 2})

    const dispatch = useTypedDispatch()

    useEffect(() => {
        id && dispatch(fetchCommentsFirst(id))
    }, [])

    // в моменте работает за двоих (2 раза блять)
    // useEffect(() => { 
    //     dispatch(fetchComments({id, ...pagination}))
    // }, [id, pagination.page, pagination.limit])

    const handlerPagination = () => {
        setPagination({...pagination, page: pagination.page + 1})
        dispatch(fetchComments({id, ...pagination})) // не нужно если пофикстить useEffect
    }

    return (
        <div className={styles.Container}>
            <h2 className={styles.Title}>Отзывы</h2>
            {
                comments.map(i => (
                    <CommentItem 
                     key={i._id}
                     name={i.name}
                     date={i.date}
                     text={i.text}
                     image={i.image}/>
                ))
            }
            <div className={styles.Center}>
                {loading && <Spiner/>}
                {error && !loading && <div className={styles.Error}>{error}</div> }
            </div>

            <button 
             className={styles.BtnMore}
             onClick={() => handlerPagination()}>
                Больше отзывов
            </button>
        </div>
    )
}

export default СommentItems;