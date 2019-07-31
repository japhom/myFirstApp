import  * as React from 'react';
import styles from './Input.module.scss';

export default class Button extends React.Component {
    render(){
        const { input, label,onChange,tipo,pattern} = this.props;
        return (
            <div className={styles.main}>
                <span>
                    {label}
                </span>
                <input  type={tipo} className={styles.default} 
                    value={ input } 
                    onChange={onChange}
                    pattern={pattern}
                    />
            </div>
        );
    }
}