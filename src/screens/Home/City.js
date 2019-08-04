import React, { PureComponent } from 'react';
import styles from './City.module.scss';

export default class City extends PureComponent {

render() {
    const {data} = this.props;
        return (
            <div className={styles.city}>
                <p>
                    {data.name}
                </p>
                <img src={"http://openweathermap.org/img/wn/" + (data.weather && data.weather[0].icon +"@2x.png" )} alt=""/><br/>
                <li>Temperatura : {data.main.temp}<br/></li>
                <li>Presión : {data.main.pressure}<br/></li>
                <li>Humedad : {data.main.humidity}<br /></li>
                <li>Maxima : {data.main.temp_max}<br /></li>
                <li>Minima : {data.main.temp_min}<br /></li>

            </div>
        );
    }
}
