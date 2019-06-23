import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export default class Button extends React.Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        label: PropTypes.string
    };
    render() {
        const { onClick, label, style, ...props } = this.props;
        console.log('TCL: Button -> render -> className', style);
        return (
            <div className={styles.main}>
                <button onClick={onClick} className={styles.button + ' ' + style} {...props}>
                    {label}
                </button>
            </div>
        );
    }
}
