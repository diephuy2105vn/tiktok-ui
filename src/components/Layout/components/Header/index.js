import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import styles from './Header.module.scss'
import images from '~/assets/images';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper} from '~/components/Popper' 
import AccountItem from '~/components/AccountItem';
const cx = classNames.bind(styles)


function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])
    return ( 
    <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img src={images.logo} alt='Tiktok' />
            <Tippy
            interactive={true}
            visible={searchResult.length > 0}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1">
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        <AccountItem />
                    </PopperWrapper>
                </div>
                )}>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck='false'></input>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                </div>
            </Tippy>
            <div className={cx('action')} >
            </div>
        </div>
    </header>
    );
}

export default Header;