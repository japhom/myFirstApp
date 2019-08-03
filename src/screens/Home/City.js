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
                Temperatura : {data.main.temp}<br/>
                Presión : {data.main.pressure}<br/>
                Humedad : {data.main.humidity}<br />
                Maxima : {data.main.temp_max}<br />
                Minima : {data.main.temp_min}<br />

            </div>
        );
    }
}
