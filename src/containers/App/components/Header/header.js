import React, { memo, useState } from 'react';
import { Input, Button } from 'reactstrap'
import PropTypes from 'prop-types';

const menus = [
    { title: 'SUNGLASSES', key: 1 },
    { title: 'EYEGLASSES', key: 2 },
    { title: 'LENSES', key: 3 },
];

function Header(props) {
    const { filterSelected } = props;

    const [ titleSelected ] = useState(1);
    const [ itemFilter, setItemFilter ] = useState('');

    const onFilterChange = (event) => {
        const { value } = event.target;
        setItemFilter(value);
        filterSelected(value)
    }

    const onReset = () => {
        setItemFilter('');
        filterSelected('')
    }

    return (
        <div className="header-container">
            <div className="header">
                <img src="https://via.placeholder.com/100x50.png" alt="primary" className="logo"/>
                <div className="menu-container d-none d-md-block">
                    <div className="menu-info">
                        { menus.map((menu) =>
                            <span
                                key={menu.key}
                                className={`menu-title ${ menu.key === titleSelected ? 'selected' : '' }`}
                            >
                                { menu.title }
                            </span>
                        )}
                    </div>
                </div>
                <div className="search-container d-none d-md-block">
                    <div className="search-section">
                        <Input
                            type="text"
                            id="search-product"
                            placeholder="search"
                            className="search-input"
                            value={itemFilter}
                            onChange={onFilterChange}
                        />
                        <Button
                            className="search-btn"
                            onClick={onReset}
                        >
                            RESET
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Header.propTypes = {
    filterSelected: PropTypes.func.isRequired,
}

export default memo(Header);
