import React, { PureComponent } from 'react';


export default class City extends PureComponent {
//    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
render() {
    const {data} = this.props;
        return (
            <div>
                <img src={"http://openweathermap.org/img/wn/" + (data.weather && data.weather[0].icon +"@2x.png" )} alt=""/>
                Temperatura : {data.main.temp}<br/>
                Presión : {data.main.pressure}<br/>
                Humedad : {data.main.humidity}<br />
                Maxima : {data.main.temp_max}<br />
                Minima : {data.main.temp_min}<br />

            </div>
        );
    }
}
