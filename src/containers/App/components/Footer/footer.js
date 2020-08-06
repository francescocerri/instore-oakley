import React, { memo } from 'react';
import { Row, Col, Input, Button, Form } from 'reactstrap';
import { FACEBOOK_LINK, TWITTER_LINK } from '../../../../constants/link';
function Footer() {
    return (
        <div className="footer">
            <Row>
                <Col xs={25} className="footer-newsletter">
                    Subscribe to our newsletter
                </Col>
                <Col xs={35} className="footer-right">
                    <Row className="footer-signup">
                        <Form className="form-container">
                            <Input
                                type="email"
                                id="sign-up"
                                className="search-input"
                            />
                            <Button
                                className="search-btn"
                            >
                                SIGN UP
                            </Button>
                        </Form>
                    </Row>
                    <Row className="social-links">
                        <a className="link" href={TWITTER_LINK}> Twitter </a>
                        <a className="link" href={FACEBOOK_LINK}> Facebook </a>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default memo(Footer);
