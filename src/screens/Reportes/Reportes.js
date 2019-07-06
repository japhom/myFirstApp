import * as React from 'react';
import styles from './Reportes.module.scss';

export default (class Reportes extends React.PureComponent {
    state = {};

    componentDidMount() { }

    render() {
        return ( 
            <div className={styles.main}>Reportes del Primer Link</div>
        );
    }
});
