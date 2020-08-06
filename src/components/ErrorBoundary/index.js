/**
 *
 * ErrorBoundary
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

// PureComponent instead functional component because componentDidCatch is not available
class ErrorBoundary extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
        };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error,
            errorInfo,
        });
    }

    render() {
        const { errorInfo } = this.state;
        if (errorInfo) {
            return (
                <div>
                    <Alert color="primary">
                       Something Wrong
                    </Alert>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node,
};

export default ErrorBoundary;
