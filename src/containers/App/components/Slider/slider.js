import React, {memo, useState} from 'react';
import { Row, Col } from 'reactstrap'
import { TRANSLATE_BOX, BOX_OUTSIDE } from '../../../../constants/config'

const boxes = [ 1, 2, 3, 4, 5 ];

function Slider() {
    const [ translateSlider, setTranslateSlider ] = useState(0);
    const maxTranslateSlider = BOX_OUTSIDE * TRANSLATE_BOX;
    return (
        <div className="container">
            <Row className="justify-content-center">
                <Col xs={50}>
                    <div className="slider">
                        <button
                            className="container-arrow-prev"
                            onClick={()=> setTranslateSlider(translateSlider + TRANSLATE_BOX)}
                            disabled={translateSlider === 0}
                        >
                            <i className="arrow left" />
                        </button>
                        <div className="slider-list">
                            <div className="slider-track" style={{transform: `translateX(${translateSlider}px)`}}>
                                {boxes.map((box)=>
                                    <div key={box} className="single-slider">
                                        { box }
                                    </div>) }
                            </div>
                        </div>
                        <button
                            className="container-arrow-next"
                            onClick={()=> setTranslateSlider(translateSlider - TRANSLATE_BOX)}
                            disabled={translateSlider === -maxTranslateSlider}
                        >
                            <i className="arrow right" />
                        </button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
Slider.propTypes = {
}
export default memo(Slider);
