import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Menu({ children, items, onChange = () => {} }) {
	const [history, setHistory] = useState([{ data: items }]);
	const current = history[history.length - 1];
	const renderItems = () => {
		return current.data.map((item, index) => {
			const isParent = !!item.children;

			return (
				<MenuItem
					key={index}
					data={item}
					onClick={() => {
						if (isParent) {
							setHistory((prev) => [...prev, item.children]);
						}
					}}
				/>
			);
		});
	};

	return (
		<Tippy
			interactive
			offset={[12, 6]}
			delay={[0, 700]}
			placement="bottom-end"
			render={(attrs) => (
				<div className={cx('menu-list')} tabIndex="-1">
					<PopperWrapper>
						{history.length > 1 && (
							<header className={cx('header')}>
								<button
									className={cx('menu-back')}
									onClick={() => {
										setHistory((prev) => prev.slice(0, prev.length - 1));
									}}
								>
									<FontAwesomeIcon icon={faChevronLeft} />
								</button>
								<h4 className={cx('menu-header')}>{current.title}</h4>
							</header>
						)}
						{renderItems()}
					</PopperWrapper>
				</div>
			)}
			onHide={() => setHistory((prev) => prev.slice(0, 1))}
		>
			{children}
		</Tippy>
	);
}

export default Menu;
