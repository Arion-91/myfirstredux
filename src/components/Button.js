import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Page} from "./Page";

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

Page.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};