import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import { getCurrencySymbol } from '../../utils/currency';
import Slider from '../Slider/loadable';

function Box(props) {
    const { name, price: { currency, current: { value : price } } } = props;

    return (
        <Col sm={60} md={30} lg={20} xl={15} className="col-xxl-12 box">
            <div className="image-container" />
            <div className="info-container">
                <div className="price"> {`${getCurrencySymbol(currency)} ${price}`} </div>
                <div className="title"> { name.toLowerCase() } </div>
                <Slider />
            </div>
        </Col>
    );
}
Box.propTypes = {
    name: PropTypes.string,
    UPC: PropTypes.string,
    availability: PropTypes.shape({
        stock: PropTypes.number,
    }),
    variants: PropTypes.array,
    price: PropTypes.shape({
        currency: PropTypes.string,
        current: PropTypes.shape({
            value: PropTypes.number,
        })
    })
}
export default memo(Box);
