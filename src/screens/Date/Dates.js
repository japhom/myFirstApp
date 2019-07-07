import React, { PureComponent } from 'react';
import styles from './Dates.module.scss';
import Button from'./../../components/Button/Button';
import Input from'./../../components/Input/Input';
import Calendario from './../../components/Calendar/Caldendar';

export default class Dates extends PureComponent {

    render() {
        
        return (
            <div className={styles.main_container}>
                <div className={styles.caption}>Graficas</div>
                <div className={styles.first_container}>

                    <div className={styles.inputs}>
                        <div>Mis Datos</div><br/><br/>
                        <Input label={"X"}/>
                        <Input label={"Y1"} />
                        <Input label={"Y2"}/>
                        <Button onClick={()=>{}}   label={'Agregar'}/>

                    </div>
                    <div className={styles.calendar}>
                        <Calendario/>
                    </div>
                    <div className={styles.export_buttons}>
                        <Button onClick={()=>{}}   label={'PDF'}/>
                        <Button onClick={() => { }} label={"EXCEL"} />
                    </div>
                </div>
                <div className={styles.second_container}>

                </div>

            </div>

        );
    }
}
