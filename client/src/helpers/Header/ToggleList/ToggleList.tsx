import { FC, MouseEvent, useEffect, useRef } from 'react';
import cn from 'classnames';

import useTypedDispatch from '../../../hooks/useTypedDispatch';
import { logout } from '../../../redux/Slices/AuthSlice/AuthActionCreator';

import { ToggleListProps } from './ToggleList.types';

import styles from './ToggleList.module.scss';
import { Link } from 'react-router-dom';

const ToggleList: FC<ToggleListProps> = ({active, 
                                          setActive,
                                          className,
                                          values, 
                                          valuesLink,
                                          ...props}) => {
    const dispath = useTypedDispatch()

    const logoutHandler = () => {
        dispath(logout())
    }

    return (
        <div 
         className={cn(styles.Container, className, {
            [styles.Active]: active,
         })}
         {...props}>
            {
                values.map((v, i) =>
                    {
                        if (v === 'Выйти') {
                            return <Link
                                     className={styles.Link} 
                                     to={valuesLink[i]}
                                     key={i}
                                     onClick={logoutHandler}>
                                        {v}
                                   </Link>
                        }

                        return <Link 
                                 className={styles.Link}
                                 to={valuesLink[i]}
                                 key={i}>
                                 {v} 
                                </Link>
                    }    
                )
            }
        </div>
  )
}

export default ToggleList;