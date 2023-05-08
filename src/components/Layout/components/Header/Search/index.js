/* eslint-disable react/jsx-no-comment-textnodes */
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TippyHeadlesss from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import 'tippy.js/dist/tippy.css';

import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';

// import Menu from '~/components/Popper/Menu';
const cx = classNames.bind(styles);

function Search() {
	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const [showResult, setShowResult] = useState(true);

	const inputRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			setSearchResult([1]);
		}, 0);
	}, []);

	const handleClear = () => {
		setSearchValue('');
		inputRef.current.focus();
	};

	return (
		<TippyHeadlesss
			interactive={true}
			visible={searchResult.length > 0 && showResult}
			render={(attrs) => (
				<div className={cx('search-result')} tabIndex="-1">
					<PopperWrapper>
						<h4 className={cx('search-title')}>Accounts</h4>
						<AccountItem />
					</PopperWrapper>
				</div>
			)}
			onClickOutside={() => setShowResult(false)}
		>
			<div className={cx('search')}>
				<input
					ref={inputRef}
					value={searchValue}
					placeholder="Search accounts and videos"
					spellCheck="false"
					onChange={(e) => setSearchValue(e.target.value)}
					onFocus={() => setShowResult(true)}
				/>
				{!!searchValue && (
					<button className={cx('clear')}>
						<FontAwesomeIcon icon={faCircleXmark} onClick={handleClear} />
					</button>
				)}
				{/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
				<button className={cx('search-btn')}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
			</div>
		</TippyHeadlesss>
	);
}

export default Search;
