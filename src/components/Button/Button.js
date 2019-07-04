import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export default class Button extends React.Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        label: PropTypes.string
    };
    render() {
        const { onClick, icon ,label, className } = this.props;
        return (
            <div className={styles.main}>
                <button onClick={onClick} className={className + ' ' +styles.button}>
                    {label}
                    {icon}
                </button>
            </div>
        );
    }
}
