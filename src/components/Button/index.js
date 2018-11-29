import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
    render() {
        const {value, onClick} = this.props;
        return (
            <button className="btn" onClick={onClick}>
                {value}
            </button>
        );
    }
}

Button.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onClick: PropTypes.func.isRequired,
};