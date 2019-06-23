import  * as React from 'react';
import styles from './Input.module.scss';

export default class Button extends React.Component {
    render(){
        const {input,onChange,object,type,tipo} = this.props;
        return (
            <div className={styles.main}>
                <input  type={tipo} className={styles.default} value={input} onChange={(e)=>onChange(object,type,e)}/>
            </div>
        );
    }
}